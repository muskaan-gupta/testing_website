import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageVendor = () => {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const [formData, setFormData] = useState({
    company_name: '',
    organization_name: '',
    vendor_name: '',
    costing_breakdown: '',
    document: '',
    other_details: '',
    account_no: '',
    gst: '',
    ifsc: '',
    phone_number: '',
    email: '',
    timing: '',
    pan: '',
    aadhar: '',
    vendor_type: '',
    certificate: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/vendors');
      if (response.ok) {
        const data = await response.json();
        setVendors(data);
      }
    } catch (error) {
      console.error('Error fetching vendors:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        setMessage({ type: 'error', text: 'Only JPG, PNG, and PDF files are allowed' });
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'File size must be less than 5MB' });
        return;
      }
      setFormData(prev => ({
        ...prev,
        certificate: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          submitData.append(key, formData[key]);
        }
      });

      const response = await fetch('http://localhost:5000/api/vendors', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Vendor added successfully!' });
        setFormData({
          company_name: '',
          organization_name: '',
          vendor_name: '',
          costing_breakdown: '',
          document: '',
          other_details: '',
          account_no: '',
          gst: '',
          ifsc: '',
          phone_number: '',
          email: '',
          timing: '',
          pan: '',
          aadhar: '',
          vendor_type: '',
          certificate: null
        });
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
        fetchVendors();
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to add vendor' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error connecting to server' });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="mb-6 flex items-center text-red-600 hover:text-red-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </button>

          <h1 className="text-3xl font-bold text-gray-800 mb-8">Manage Vendors</h1>

          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add New Vendor</h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Vendor Information</h3>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Organization Name *</label>
                <input
                  type="text"
                  name="organization_name"
                  value={formData.organization_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter organization name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Vendor Name *</label>
                <input
                  type="text"
                  name="vendor_name"
                  value={formData.vendor_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter vendor contact name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Vendor Type *</label>
                <select
                  name="vendor_type"
                  value={formData.vendor_type}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Vendor Type</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Flower">Flower</option>
                  <option value="Tent House">Tent House</option>
                  <option value="Video Photography">Video Photography</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Cabs">Cabs</option>
                  <option value="Tents">Tents</option>
                  <option value="Petrol or Fuel">Petrol or Fuel</option>
                  <option value="Catering">Catering</option>
                  <option value="Courier">Courier</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Memento or Gifts">Memento or Gifts</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Document URL</label>
                <input
                  type="url"
                  name="document"
                  value={formData.document}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="https://example.com/document"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Timing *</label>
                <input
                  type="datetime-local"
                  name="timing"
                  value={formData.timing}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Costing Breakdown *</label>
                <textarea
                  name="costing_breakdown"
                  value={formData.costing_breakdown}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter detailed cost breakdown..."
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Other Details</label>
                <textarea
                  name="other_details"
                  value={formData.other_details}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Additional vendor details..."
                />
              </div>

              <div className="col-span-2 mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Vendor Contact Information</h3>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="organizer@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="1234567890"
                />
              </div>

              <div className="col-span-2 mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Financial Details</h3>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Account Number *</label>
                <input
                  type="text"
                  name="account_no"
                  value={formData.account_no}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="1234567890"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">IFSC Code *</label>
                <input
                  type="text"
                  name="ifsc"
                  value={formData.ifsc}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="ABCD0123456"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">GST Number</label>
                <input
                  type="text"
                  name="gst"
                  value={formData.gst}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter GST number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">PAN Number</label>
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="ABCDE1234F"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Aadhar Number</label>
                <input
                  type="text"
                  name="aadhar"
                  value={formData.aadhar}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="123456789012"
                />
              </div>

              <div className="col-span-2 mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Document Upload</h3>
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Certificate/Supporting Documents</label>
                <input
                  type="file"
                  name="certificate"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                />
                <p className="text-sm text-gray-500 mt-1">Max file size: 5MB. Accepted formats: JPG, PNG, PDF</p>
                {formData.certificate && (
                  <p className="text-sm text-green-600 mt-2">✓ {formData.certificate.name} selected</p>
                )}
              </div>

              <div className="col-span-2 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Saving...' : 'Add Vendor'}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Vendor List</h2>
            
            {vendors.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No vendors found. Add your first vendor above.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vendor Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timing</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {vendors.map((vendor) => (
                      <tr key={vendor.document_id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vendor.document_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vendor.company_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vendor.vendor_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vendor.vendor_type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vendor.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{vendor.phone_number}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(vendor.timing).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {vendor.certificate ? (
                            <a 
                              href={`http://localhost:5000/uploads/${vendor.certificate}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-red-600 hover:text-red-800 underline"
                            >
                              View
                            </a>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManageVendor;
