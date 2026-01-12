# Database Schema Summary - THREE SEPARATE TABLES

## 1. VENDORS TABLE (vendors_schema.sql)
**Frontend:** client/src/pages/ManageEvent.js
**Backend Route:** server/routes/vendors.js
**API Endpoint:** /api/vendors
**Purpose:** Vendor management (suppliers, service providers)

### Fields:
- vendor_id (PK)
- company_name
- organization_name
- vendor_name
- vendor_type (Plastic, Flower, Tent House, Video Photography, Digital Marketing, Cabs, Tents, Petrol/Fuel, Catering, Courier, Furniture, Memento/Gifts, Other)
- costing_breakdown
- document
- other_details
- account_no
- gst
- ifsc
- phone_number
- email
- timing
- pan
- aadhar
- certificate (file upload)
- created_at
- updated_at

---

## 2. EVENTS TABLE (events_schema_new.sql)
**Frontend:** Not yet created (future use)
**Backend Route:** server/routes/events.js
**API Endpoint:** /api/events
**Purpose:** General events management (distinct from vendors and project events)

### Fields:
- event_id (PK)
- event_name
- event_type
- event_date
- event_location
- event_description
- costing_breakdown
- document
- other_details
- account_no
- gst
- ifsc
- phone_number
- email
- timing
- pan
- aadhar
- certificate (file upload)
- status
- created_at
- updated_at

---

## 3. PROJECT_EVENTS TABLE (project_events_schema.sql)
**Frontend:** client/src/pages/ManageEvents.js
**Backend Route:** server/routes/project-events.js
**API Endpoint:** /api/project-events
**Purpose:** Event management for 15 specific projects with approval workflow

### Fields:
- id (PK)
- project_name (Community Building, Women Empowerment, Education Initiative, Healthcare Access, Rural Development, Child Welfare, Senior Care, Skill Development, Digital Literacy, Clean Water, Food Security, Disaster Relief, Mental Health, Other Projects)
- event_name
- event_description
- event_purpose
- costing_details
- handled_by_employee
- event_date
- document (file upload)
- status (Pending Approval)
- created_at
- updated_at

---

## INSTALLATION STEPS:

1. **Delete old events table if it exists:**
```sql
DROP TABLE IF EXISTS events;
```

2. **Create vendors table:**
```sql
SOURCE c:\Users\hp\OneDrive\Desktop\RudrakshaWFF\server\database\vendors_schema.sql;
```

3. **Create events table:**
```sql
SOURCE c:\Users\hp\OneDrive\Desktop\RudrakshaWFF\server\database\events_schema_new.sql;
```

4. **Create project_events table:**
```sql
SOURCE c:\Users\hp\OneDrive\Desktop\RudrakshaWFF\server\database\project_events_schema.sql;
```

5. **Restart backend server** to load new vendors route
