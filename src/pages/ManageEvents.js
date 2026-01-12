import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageEvents = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    project_name: '',
    event_name: '',
    event_description: '',
    event_purpose: '',
    costing_details: '',
    handled_by_employee: '',
    event_date: '',
    document: null
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const projectList = [
    'Community Building',
    'Women Empowerment',
    'Environment Armour',
    'Education Initiative',
    'Healthcare Access',
    'Rural Development',
    'Child Welfare',
    'Senior Care',
    'Skill Development',
    'Digital Literacy',
    'Clean Water',
    'Food Security',
    'Disaster Relief',
    'Mental Health',
    'Other Projects'
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/project-events');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
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
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setMessage({ type: 'error', text: 'Only PDF and Word documents are allowed' });
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'File size must be less than 10MB' });
        return;
      }
      setFormData(prev => ({
        ...prev,
        document: file
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

      const response = await fetch('http://localhost:5000/api/project-events', {
        method: 'POST',
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Event submitted successfully for approval!' });
        setFormData({
          project_name: '',
          event_name: '',
          event_description: '',
          event_purpose: '',
          costing_details: '',
          handled_by_employee: '',
          event_date: '',
          document: null
        });
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
        fetchEvents();
      } else {
        setMessage({ type: 'error', text: result.message || 'Failed to submit event' });
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

          <h1 className="text-3xl font-bold text-gray-800 mb-8">Event Management</h1>

          {message.text && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message.text}
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Submit Event for Approval</h2>
            <p className="text-sm text-gray-600 mb-6">Fill in the event details and submit for approval by higher authorities</p>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Project & Event Details</h3>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Project Name *</label>
                <select
                  name="project_name"
                  value={formData.project_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select Project</option>
                  {projectList.map((project, index) => (
                    <option key={index} value={project}>{project}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Event Name *</label>
                <input
                  type="text"
                  name="event_name"
                  value={formData.event_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter event name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Event Date *</label>
                <input
                  type="date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Handled By (Employee Name) *</label>
                <input
                  type="text"
                  name="handled_by_employee"
                  value={formData.handled_by_employee}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Employee responsible for this event"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Event Purpose *</label>
                <textarea
                  name="event_purpose"
                  value={formData.event_purpose}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="What is this event for? Describe the purpose and objectives..."
                />
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Event Description *</label>
                <textarea
                  name="event_description"
                  value={formData.event_description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Provide detailed description of the event, activities, target audience, etc..."
                />
              </div>

              <div className="col-span-2 mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Costing Information</h3>
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Costing Details *</label>
                <textarea
                  name="costing_details"
                  value={formData.costing_details}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Breakdown of costs: venue, materials, transportation, refreshments, etc..."
                />
              </div>

              <div className="col-span-2 mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Supporting Document</h3>
              </div>

              <div className="col-span-2">
                <label className="block text-gray-700 font-medium mb-2">Upload Document for Verification *</label>
                <input
                  type="file"
                  name="document"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload event proposal document for approval (Max 10MB, PDF or Word format)
                </p>
                {formData.document && (
                  <p className="text-sm text-green-600 mt-2">✓ {formData.document.name} selected</p>
                )}
              </div>

              <div className="col-span-2 mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit for Approval'}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Submitted Events</h2>
            
            {events.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No events submitted yet. Create your first event above.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Handled By</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {events.map((event) => (
                      <tr key={event.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.project_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.event_name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {new Date(event.event_date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{event.handled_by_employee}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {event.document ? (
                            <a 
                              href={`http://localhost:5000/uploads/${event.document}`} 
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Pending Approval
                          </span>
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

export default ManageEvents;
