import * as Yup from 'yup';

// Step 1 validation schema (Personal Information)
export const membershipStep1ValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email address is required'),
  fullNameEnglish: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name in English is required'),
  fullNameArabic: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Full name in Arabic is required'),
  age: Yup.date()
    .max(new Date(), 'Date cannot be in the future')
    .required('Age is required'),
  nationality: Yup.string()
    .required('Nationality is required'),
  nationalityOther: Yup.string()
    .when('nationality', {
      is: 'others',
      then: (schema) => schema.required('Please specify your nationality'),
      otherwise: (schema) => schema.notRequired(),
    }),
  cityOfResidence: Yup.string()
    .required('City of residence is required'),
  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, 'Please enter a valid phone number')
    .required('Phone number is required'),
});

// Step 2 validation schema (Professional Information)
export const membershipStep2ValidationSchema = Yup.object({
  professionalPhoto: Yup.mixed<File>()
    .required('Professional photo is required')
    .test('fileSize', 'File size must be less than 10 MB', (value: File | null | undefined) => {
      if (!value) return false;
      return value.size <= 10 * 1024 * 1024; // 10 MB
    }),
  currentWorkplace: Yup.string()
    .required('Current workplace/affiliation is required'),
  jobTitle: Yup.string()
    .required('Job title is required'),
  medicalDegrees: Yup.mixed<File>()
    .required('Medical degrees document is required')
    .test('fileSize', 'File size must be less than 10 MB', (value: File | null | undefined) => {
      if (!value) return false;
      return value.size <= 10 * 1024 * 1024; // 10 MB
    }),
  subspecialty: Yup.string()
    .notRequired(),
});

// Step 3 validation schema (Membership Details)
export const membershipStep3ValidationSchema = Yup.object({
  membershipStatus: Yup.string()
    .required('Membership status is required'),
  membershipRequest: Yup.mixed<File>()
    .required('Membership request document is required')
    .test('fileSize', 'File size must be less than 10 MB', (value: File | null | undefined) => {
      if (!value) return false;
      return value.size <= 10 * 1024 * 1024; // 10 MB
    }),
});

// Complete form validation schema
export const membershipValidationSchema = Yup.object().concat(
  membershipStep1ValidationSchema
).concat(membershipStep2ValidationSchema).concat(membershipStep3ValidationSchema);

// Initial values for the form
export const membershipInitialValues = {
  email: '',
  fullNameEnglish: '',
  fullNameArabic: '',
  age: '',
  nationality: '',
  nationalityOther: '',
  cityOfResidence: '',
  phoneNumber: '',
  professionalPhoto: null,
  currentWorkplace: '',
  jobTitle: '',
  medicalDegrees: null,
  subspecialty: '',
  membershipStatus: '',
  membershipRequest: null,
};

// Iraqi Governorates
export const iraqiGovernorates = [
  'Baghdad',
  'Basra',
  'Maysan',
  'Dhi Qar',
  'Al-Muthanna',
  'Al-Qadisiyyah',
  'Wasit',
  'Karbala',
  'Babil',
  'Al-Najaf',
  'Al-Anbar',
  'Saladin',
  'Diyala',
  'Kirkuk',
  'Nineveh',
  'Erbil',
  'Dohuk',
  'Sulaymaniyah',
];

// Job titles
export const jobTitles = [
  'Resident - Plain',
  'Resident - Board',
  'General Practitioner',
  'Specialist',
  'Consultant',
];

// Multi-step form configuration
export const formSteps = [
  {
    title: 'Personal Information',
    subtitle: 'Please provide your personal details',
    fields: [
      'email',
      'fullNameEnglish', 
      'fullNameArabic',
      'age',
      'nationality',
      'nationalityOther',
      'cityOfResidence',
      'phoneNumber'
    ],
    validationSchema: membershipStep1ValidationSchema
  },
  {
    title: 'Professional Information',
    subtitle: 'Please provide your professional details and documents',
    fields: [
      'professionalPhoto',
      'currentWorkplace',
      'jobTitle',
      'medicalDegrees',
      'subspecialty'
    ],
    validationSchema: membershipStep2ValidationSchema
  },
  {
    title: 'Membership Details',
    subtitle: 'Complete your membership application',
    fields: [
      'membershipStatus',
      'membershipRequest'
    ],
    validationSchema: membershipStep3ValidationSchema
  }
];

// Form submission handler
export const handleMembershipSubmit = (values: typeof membershipInitialValues) => {
  console.log('Membership form submitted:', values);
  // Handle form submission here - send to API, etc.
  return new Promise((resolve) => {
    setTimeout(() => {
      alert('Membership application submitted successfully!');
      resolve(values);
    }, 1000);
  });
};
