import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageLeaves = () => {
  const navigate = useNavigate();
  const [leaves, setLeaves] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [leaveBalance, setLeaveBalance] = useState([]);
  const [selectedLeaveType, setSelectedLeaveType] = useState(null);
  const [formData, setFormData] = useState({
    employee_name: '',
    employee_id: '',
    leave_type_id: '',
    from_date: '',
    to_date: '',
    total_days: 0,
    is_half_day: false,
    reason: '',
    medical_certificate: false,
    supporting_document: null,
    is_work_from_home: false,
    wfh_from_date: '',
    wfh_to_date: '',
    approval_status: 'Pending'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchLeaves();
    fetchEmployees();
    fetchLeaveTypes();
  }, []);

  useEffect(() => {
    if (formData.from_date && formData.to_date) {
      calculateTotalDays();
    }
  }, [formData.from_date, formData.to_date, formData.is_half_day]);

  useEffect(() => {
    if (formData.employee_id) {
      fetchLeaveBalance(formData.employee_id);
    }
  }, [formData.employee_id]);

  useEffect(() => {
    if (formData.leave_type_id) {
      const selected = leaveTypes.find(lt => lt.leave_type_id === parseInt(formData.leave_type_id));
      setSelectedLeaveType(selected);
    } else {
      setSelectedLeaveType(null);
    }
  }, [formData.leave_type_id, leaveTypes]);

  const fetchLeaves = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/employee-leaves');
      if (response.ok) {
        const data = await response.json();
        setLeaves(data);
      }
    } catch (error) {
      console.error('Error fetching leaves:', error);
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/employees');
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchLeaveTypes = async () => {
    try {
      console.log('Fetching leave types...');
      const response = await fetch('http://localhost:5000/api/leave-types');
      console.log('Leave types response status:', response.status);
      if (response.ok) {
        const data = await response.json();
        console.log('Leave types data:', data);
        setLeaveTypes(data);
      } else {
        console.error('Failed to fetch leave types, status:', response.status);
        setMessage({ type: 'error', text: 'Failed to load leave types. Please check if the server is running.' });
      }
    } catch (error) {
      console.error('Error fetching leave types:', error);
      setMessage({ type: 'error', text: 'Error loading leave types: ' + error.message });
    }
  };

  const fetchLeaveBalance = async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/employee-leaves/balance/${employeeId}`);
      if (response.ok) {
        const data = await response.json();
        setLeaveBalance(data);
      }
    } catch (error) {
      console.error('Error fetching leave balance:', error);
    }
  };

  const calculateTotalDays = () => {
    const fromDate = new Date(formData.from_date);
    const toDate = new Date(formData.to_date);
    
    if (toDate >= fromDate) {
      const diffTime = Math.abs(toDate - fromDate);
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      
      // If it's a half-day leave, set to 0.5
      if (formData.is_half_day) {
        diffDays = 0.5;
      }
      
      setFormData(prev => ({ ...prev, total_days: diffDays }));
    } else {
      setFormData(prev => ({ ...prev, total_days: 0 }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf', 
                           'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setMessage({ type: 'error', text: 'Only JPG, PNG, PDF, and Word documents are allowed' });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'File size must be less than 5MB' });
        return;
      }
      setFormData(prev => ({
        ...prev,
        supporting_document: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Validate against leave type constraints
    if (selectedLeaveType) {
      if (selectedLeaveType.max_consecutive_days && formData.total_days > selectedLeaveType.max_consecutive_days) {
        setMessage({ 
          type: 'error', 
          text: `${selectedLeaveType.leave_type_name} allows maximum ${selectedLeaveType.max_consecutive_days} consecutive days. You requested ${formData.total_days} days.` 
        });
        setLoading(false);
        return;
      }

      // Check leave balance
      const balance = leaveBalance.find(b => b.leave_type_id === parseInt(formData.leave_type_id));
      if (balance && formData.total_days > balance.remaining_days) {
        setMessage({ 
          type: 'error', 
          text: `Insufficient leave balance. You have ${balance.remaining_days} days remaining for ${selectedLeaveType.leave_type_name}.` 
        });
        setLoading(false);
        return;
      }
    }

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          submitData.append(key, formData[key]);
        }
      });

      const url = editingId 
        ? `http://localhost:5000/api/employee-leaves/${editingId}`
        : 'http://localhost:5000/api/employee-leaves';
      
      const response = await fetch(url, {
        method: editingId ? 'PUT' : 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: editingId ? 'Leave request updated successfully!' : `Leave request submitted successfully! Remaining balance: ${result.remaining_days || 0} days` 
        });
        resetForm();
        fetchLeaves();
        if (formData.employee_id) {
          fetchLeaveBalance(formData.employee_id);
        }
      } else {
        setMessage({ type: 'error', text: result.message || 'Error submitting leave request' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error: ' + error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (leave) => {
    setFormData({
      unique_id: leave.unique_id || '',
      employee_name: leave.employee_name || '',
      employee_id: leave.employee_id,
      leave_type_id: leave.leave_type_id,
      from_date: leave.from_date.split('T')[0],
      to_date: leave.to_date.split('T')[0],
      total_days: leave.total_days,
      is_half_day: leave.is_half_day,
      reason: leave.reason,
      medical_certificate: leave.medical_certificate,
      is_work_from_home: leave.is_work_from_home,
      wfh_from_date: leave.wfh_from_date ? leave.wfh_from_date.split('T')[0] : '',
      wfh_to_date: leave.wfh_to_date ? leave.wfh_to_date.split('T')[0] : '',
      approval_status: leave.approval_status
    });
    setEditingId(leave.leave_id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApprove = async (leaveId) => {
    if (!window.confirm('Are you sure you want to approve this leave request?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/employee-leaves/${leaveId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          approval_status: 'Approved',
          approved_by: 1
        }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Leave request approved successfully!' });
        fetchLeaves();
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error approving leave request' });
    }
  };

  const handleReject = async (leaveId) => {
    if (!window.confirm('Are you sure you want to reject this leave request?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/employee-leaves/${leaveId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          approval_status: 'Rejected',
          approved_by: 1
        }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Leave request rejected successfully!' });
        fetchLeaves();
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error rejecting leave request' });
    }
  };

  const handleDelete = async (leaveId) => {
    if (!window.confirm('Are you sure you want to delete this leave request?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/employee-leaves/${leaveId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Leave request deleted successfully!' });
        fetchLeaves();
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting leave request' });
    }
  };

  const resetForm = () => {
    setFormData({
      unique_id: '',
      employee_name: '',
      employee_id: '',
      leave_type_id: '',
      from_date: '',
      to_date: '',
      total_days: 0,
      is_half_day: false,
      reason: '',
      medical_certificate: false,
      supporting_document: null,
      is_work_from_home: false,
      wfh_from_date: '',
      wfh_to_date: '',
      approval_status: 'Pending'
    });
    setEditingId(null);
    setSelectedLeaveType(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'text-green-700 bg-green-100';
      case 'Rejected':
        return 'text-red-700 bg-red-100';
      case 'Pending':
        return 'text-yellow-700 bg-yellow-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employee Leave Management</h1>
            <p className="mt-1 text-sm text-gray-600">Manage employee leave requests with specific criteria and validations</p>
          </div>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Message Display */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {message.text}
          </div>
        )}

        {/* Leave Balance Display */}
        {formData.employee_id && leaveBalance.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Leave Balance for Selected Employee</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {leaveBalance.map(balance => (
                <div key={balance.leave_type_id} className="border border-gray-200 rounded-lg p-3">
                  <p className="text-xs font-medium text-gray-600">{balance.leave_type_name}</p>
                  <p className="text-lg font-bold text-gray-900">{balance.remaining_days}/{balance.max_days_per_year}</p>
                  <p className="text-xs text-gray-500">days left</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Leave Request Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {editingId ? 'Edit Leave Request' : 'Apply for Leave'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Unique ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unique ID <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="unique_id"
                  value={formData.unique_id}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Unique ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Employee Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employee Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="employee_name"
                  value={formData.employee_name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Employee Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Employee ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employee ID <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="employee_id"
                  value={formData.employee_id}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter Employee ID"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {/* Leave Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Leave Type <span className="text-red-600">*</span>
                </label>
                <select
                  name="leave_type_id"
                  value={formData.leave_type_id}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Leave Type</option>
                  {leaveTypes && leaveTypes.length > 0 ? (
                    leaveTypes.map(type => (
                      <option key={type.leave_type_id} value={type.leave_type_id}>
                        {type.leave_type_name} (Max: {type.max_consecutive_days || type.max_days_per_year} days)
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>Loading leave types...</option>
                  )}
                </select>
                {leaveTypes && leaveTypes.length === 0 && (
                  <p className="text-xs text-red-500 mt-1">No leave types available. Please check server connection.</p>
                )}
              </div>
            </div>

            {/* Leave Type Criteria Display */}
            {selectedLeaveType && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-2">📋 {selectedLeaveType.leave_type_name} - Criteria & Rules</h3>
                <p className="text-sm text-blue-800 mb-2">{selectedLeaveType.description}</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Annual Limit:</strong> {selectedLeaveType.max_days_per_year} days per year</li>
                  {selectedLeaveType.max_consecutive_days && (
                    <li>• <strong>Consecutive Days:</strong> Maximum {selectedLeaveType.max_consecutive_days} days at a time</li>
                  )}
                  <li>• <strong>Medical Certificate:</strong> {selectedLeaveType.requires_medical_certificate ? 'Required' : 'Not Required'}</li>
                  {selectedLeaveType.excluded_staff_types && (
                    <li>• <strong>Not Applicable For:</strong> {selectedLeaveType.excluded_staff_types}</li>
                  )}
                  {selectedLeaveType.has_work_from_home_option && (
                    <li>• <strong>Work From Home:</strong> Available ({selectedLeaveType.wfh_days} days)</li>
                  )}
                  {selectedLeaveType.is_half_day_applicable && (
                    <li>• <strong>Half Day:</strong> Applicable</li>
                  )}
                </ul>
                {selectedLeaveType.criteria_notes && (
                  <div className="mt-2 pt-2 border-t border-blue-200">
                    <p className="text-xs text-blue-600"><strong>Note:</strong> {selectedLeaveType.criteria_notes}</p>
                  </div>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* From Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  name="from_date"
                  value={formData.from_date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* To Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To Date <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  name="to_date"
                  value={formData.to_date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Total Days */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Days <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="total_days"
                  value={formData.total_days}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 font-bold text-lg"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Half Day Checkbox */}
              {selectedLeaveType?.is_half_day_applicable && (
                <div className="flex items-center pt-8">
                  <input
                    type="checkbox"
                    name="is_half_day"
                    checked={formData.is_half_day}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Half Day Leave (0.5 day)
                  </label>
                </div>
              )}

              {/* Medical Certificate */}
              <div className="flex items-center pt-8">
                <input
                  type="checkbox"
                  name="medical_certificate"
                  checked={formData.medical_certificate}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Medical Certificate Available
                </label>
              </div>

              {/* Work From Home Option */}
              {selectedLeaveType?.has_work_from_home_option && (
                <div className="flex items-center pt-8">
                  <input
                    type="checkbox"
                    name="is_work_from_home"
                    checked={formData.is_work_from_home}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Include Work From Home ({selectedLeaveType.wfh_days} days)
                  </label>
                </div>
              )}
            </div>

            {/* Work From Home Dates */}
            {formData.is_work_from_home && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-yellow-50 p-4 rounded-lg">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WFH From Date
                  </label>
                  <input
                    type="date"
                    name="wfh_from_date"
                    value={formData.wfh_from_date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WFH To Date
                  </label>
                  <input
                    type="date"
                    name="wfh_to_date"
                    value={formData.wfh_to_date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            )}

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason <span className="text-red-600">*</span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter detailed reason for leave..."
              />
            </div>

            {/* Supporting Document Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Supporting Document (Medical Certificate, Proof, etc.)
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <p className="text-xs text-gray-500 mt-1">Upload medical certificate or supporting documents (Max 5MB - JPG, PNG, PDF, DOC)</p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors disabled:bg-gray-400"
              >
                {loading ? 'Processing...' : editingId ? 'Update Leave Request' : 'Submit Leave Request'}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Leave Requests List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Leave Requests</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unique ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Leave Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">From Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">To Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Days</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">WFH</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {leaves.length === 0 ? (
                  <tr>
                    <td colSpan="10" className="px-6 py-4 text-center text-gray-500">
                      No leave requests found
                    </td>
                  </tr>
                ) : (
                  leaves.map(leave => (
                    <tr key={leave.leave_id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 text-sm text-gray-900">{leave.unique_id || leave.leave_id}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{leave.employee_name || 'N/A'}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">{leave.employee_id}</td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {leave.leave_type_name}
                        {leave.is_half_day && <span className="text-xs text-purple-600 ml-1">(Half)</span>}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {new Date(leave.from_date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {new Date(leave.to_date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-gray-900">{leave.total_days}</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(leave.approval_status)}`}>
                          {leave.approval_status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {leave.is_work_from_home ? '✓' : '-'}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <div className="flex gap-2">
                          {leave.approval_status === 'Pending' && (
                            <>
                              <button
                                onClick={() => handleApprove(leave.leave_id)}
                                className="text-green-600 hover:text-green-800 text-lg"
                                title="Approve"
                              >
                                ✓
                              </button>
                              <button
                                onClick={() => handleReject(leave.leave_id)}
                                className="text-red-600 hover:text-red-800 text-lg"
                                title="Reject"
                              >
                                ✗
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => handleEdit(leave)}
                            className="text-blue-600 hover:text-blue-800"
                            title="Edit"
                          >
                            ✎
                          </button>
                          <button
                            onClick={() => handleDelete(leave.leave_id)}
                            className="text-red-600 hover:text-red-800"
                            title="Delete"
                          >
                            🗑
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageLeaves;
