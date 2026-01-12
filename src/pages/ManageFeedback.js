import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageFeedback = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('employee'); // 'employee' or 'project'
  const [employeeFeedbacks, setEmployeeFeedbacks] = useState([]);
  const [projectFeedbacks, setProjectFeedbacks] = useState([]);
  
  const [employeeFormData, setEmployeeFormData] = useState({
    feedback_for_employee: '',
    feedback_given_by: '',
    feedback_type: '',
    reason: '',
    review: '',
    remarks: '',
    employee_idea: ''
  });

  const [projectFormData, setProjectFormData] = useState({
    project_or_event: '',
    feedback_given_by: '',
    feedback_content: '',
    reason: '',
    remarks: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const feedbackTypes = [
    'Performance Review',
    'Behavior & Conduct',
    'Work Quality',
    'Team Collaboration',
    'Innovation & Ideas',
    'Punctuality & Attendance',
    'Communication Skills',
    'Other'
  ];

  useEffect(() => {
    fetchEmployeeFeedbacks();
    fetchProjectFeedbacks();
  }, []);

  const fetchEmployeeFeedbacks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/employee-feedback');
      if (response.ok) {
        const data = await response.json();
        setEmployeeFeedbacks(data);
      }
    } catch (error) {
      console.error('Error fetching employee feedbacks:', error);
    }
  };

  const fetchProjectFeedbacks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/project-feedback');
      if (response.ok) {
        const data = await response.json();
        setProjectFeedbacks(data);
      }
    } catch (error) {
      console.error('Error fetching project feedbacks:', error);
    }
  };

  const handleEmployeeInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProjectInputChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmployeeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/employee-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeFormData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Employee feedback submitted successfully!' });
        setEmployeeFormData({
          feedback_for_employee: '',
          feedback_given_by: '',
          feedback_type: '',
          reason: '',
          review: '',
          remarks: '',
          employee_idea: ''
        });
        fetchEmployeeFeedbacks();
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to submit feedback' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error connecting to server' });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('http://localhost:5000/api/project-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectFormData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Project/Event feedback submitted successfully!' });
        setProjectFormData({
          project_or_event: '',
          feedback_given_by: '',
          feedback_content: '',
          reason: '',
          remarks: ''
        });
        fetchProjectFeedbacks();
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to submit feedback' });
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

          <h1 className="text-3xl font-bold text-gray-800 mb-8">Feedback Management</h1>

          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-white rounded-lg shadow-md p-1 mb-6">
            <button
              onClick={() => setActiveTab('employee')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                activeTab === 'employee'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Employee Feedback
            </button>
            <button
              onClick={() => setActiveTab('project')}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                activeTab === 'project'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Project/Event Feedback
            </button>
          </div>

          {/* Employee Feedback Form */}
          {activeTab === 'employee' && (
            <>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Submit Employee Feedback</h2>
                <p className="text-sm text-gray-600 mb-6">Provide feedback for employee performance, behavior, and ideas</p>
                
                <form onSubmit={handleEmployeeSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Feedback For (Employee Name) *</label>
                    <input
                      type="text"
                      name="feedback_for_employee"
                      value={employeeFormData.feedback_for_employee}
                      onChange={handleEmployeeInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Employee receiving feedback"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Feedback Given By *</label>
                    <input
                      type="text"
                      name="feedback_given_by"
                      value={employeeFormData.feedback_given_by}
                      onChange={handleEmployeeInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Feedback Type *</label>
                    <select
                      name="feedback_type"
                      value={employeeFormData.feedback_type}
                      onChange={handleEmployeeInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value="">Select Feedback Type</option>
                      {feedbackTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Reason *</label>
                    <input
                      type="text"
                      name="reason"
                      value={employeeFormData.reason}
                      onChange={handleEmployeeInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Reason for feedback"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Review *</label>
                    <textarea
                      name="review"
                      value={employeeFormData.review}
                      onChange={handleEmployeeInputChange}
                      required
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Detailed review of employee's performance or behavior..."
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Remarks</label>
                    <textarea
                      name="remarks"
                      value={employeeFormData.remarks}
                      onChange={handleEmployeeInputChange}
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Additional remarks or notes..."
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Employee's Ideas/Suggestions</label>
                    <textarea
                      name="employee_idea"
                      value={employeeFormData.employee_idea}
                      onChange={handleEmployeeInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Document employee's innovative ideas or suggestions..."
                    />
                  </div>

                  <div className="col-span-2 mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Submitting...' : 'Submit Employee Feedback'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Employee Feedback List */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Employee Feedback History</h2>
                
                {employeeFeedbacks.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No employee feedback submitted yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">For Employee</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Given By</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {employeeFeedbacks.map((feedback) => (
                          <tr key={feedback.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.feedback_for_employee}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.feedback_given_by}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.feedback_type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.reason}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {new Date(feedback.created_at).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Project/Event Feedback Form */}
          {activeTab === 'project' && (
            <>
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Submit Project/Event Feedback</h2>
                <p className="text-sm text-gray-600 mb-6">Provide feedback on projects or events</p>
                
                <form onSubmit={handleProjectSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Project or Event Name *</label>
                    <input
                      type="text"
                      name="project_or_event"
                      value={projectFormData.project_or_event}
                      onChange={handleProjectInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Name of project or event"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Feedback Given By *</label>
                    <input
                      type="text"
                      name="feedback_given_by"
                      value={projectFormData.feedback_given_by}
                      onChange={handleProjectInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Reason *</label>
                    <input
                      type="text"
                      name="reason"
                      value={projectFormData.reason}
                      onChange={handleProjectInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Reason for feedback"
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Feedback Content *</label>
                    <textarea
                      name="feedback_content"
                      value={projectFormData.feedback_content}
                      onChange={handleProjectInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Detailed feedback about the project or event..."
                    />
                  </div>

                  <div className="col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">Remarks</label>
                    <textarea
                      name="remarks"
                      value={projectFormData.remarks}
                      onChange={handleProjectInputChange}
                      rows="2"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Additional remarks or suggestions..."
                    />
                  </div>

                  <div className="col-span-2 mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Submitting...' : 'Submit Project/Event Feedback'}
                    </button>
                  </div>
                </form>
              </div>

              {/* Project Feedback List */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Project/Event Feedback History</h2>
                
                {projectFeedbacks.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No project/event feedback submitted yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project/Event</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Given By</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {projectFeedbacks.map((feedback) => (
                          <tr key={feedback.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.project_or_event}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.feedback_given_by}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{feedback.reason}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                              {new Date(feedback.created_at).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default ManageFeedback;
