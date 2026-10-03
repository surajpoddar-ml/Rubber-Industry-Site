import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Paperclip } from 'lucide-react';
import Button from '../common/Button';

const initialForm = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  productCategory: '',
  productName: '',
  quantity: '',
  unit: '',
  application: '',
  materialRequirement: '',
  specification: '',
  message: '',
};

const productCategories = [
  'Rubber Sheets',
  'Molded Rubber Products',
  'Extruded Rubber Profiles',
  'Industrial Rubber Components',
  'Sealing Solutions',
  'Custom Rubber Products',
  'Other',
];

const units = ['Pieces', 'Meters', 'Kg', 'Tons', 'Rolls', 'Sets', 'Sheets', 'Other'];

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [fileName, setFileName] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.message.trim()) newErrors.message = 'Please describe your requirement';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    // Simulate API call (frontend only)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate success
    setStatus('success');
    setForm(initialForm);
    setFileName('');

    // Reset after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  if (status === 'success') {
    return (
      <motion.div
        className="bg-forest-50 border border-forest-200 rounded-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle size={48} className="text-forest-600 mx-auto mb-4" />
        <h3 className="font-display text-xl font-bold text-charcoal-900 mb-2">
          Inquiry Submitted Successfully
        </h3>
        <p className="text-charcoal-600">
          Thank you for your inquiry. Our team will review your requirement and
          respond within 1–2 business days.
        </p>
      </motion.div>
    );
  }

  const inputClasses = (name) =>
    `w-full px-4 py-3 rounded-lg border text-sm bg-white transition-colors placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 focus:border-forest-500 ${
      errors[name] ? 'border-red-400' : 'border-charcoal-200 hover:border-charcoal-300'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Row 1: Name, Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClasses('fullName')}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company"
            className={inputClasses('company')}
          />
        </div>
      </div>

      {/* Row 2: Email, Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClasses('email')}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+977-..."
            className={inputClasses('phone')}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Row 3: Country, Product Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={form.country}
            onChange={handleChange}
            placeholder="Your country"
            className={inputClasses('country')}
          />
        </div>
        <div>
          <label
            htmlFor="productCategory"
            className="block text-sm font-medium text-charcoal-700 mb-1.5"
          >
            Product Category
          </label>
          <select
            id="productCategory"
            name="productCategory"
            value={form.productCategory}
            onChange={handleChange}
            className={inputClasses('productCategory')}
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Product, Qty, Unit */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Product Name
          </label>
          <input
            id="productName"
            name="productName"
            type="text"
            value={form.productName}
            onChange={handleChange}
            placeholder="e.g., Rubber Sheet"
            className={inputClasses('productName')}
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="text"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g., 500"
            className={inputClasses('quantity')}
          />
        </div>
        <div>
          <label htmlFor="unit" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Unit
          </label>
          <select
            id="unit"
            name="unit"
            value={form.unit}
            onChange={handleChange}
            className={inputClasses('unit')}
          >
            <option value="">Select unit</option>
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 5: Application, Material */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="application" className="block text-sm font-medium text-charcoal-700 mb-1.5">
            Application
          </label>
          <input
            id="application"
            name="application"
            type="text"
            value={form.application}
            onChange={handleChange}
            placeholder="e.g., Conveyor belt lining"
            className={inputClasses('application')}
          />
        </div>
        <div>
          <label
            htmlFor="materialRequirement"
            className="block text-sm font-medium text-charcoal-700 mb-1.5"
          >
            Material Requirement
          </label>
          <input
            id="materialRequirement"
            name="materialRequirement"
            type="text"
            value={form.materialRequirement}
            onChange={handleChange}
            placeholder="e.g., Natural Rubber, EPDM"
            className={inputClasses('materialRequirement')}
          />
        </div>
      </div>

      {/* Specification */}
      <div>
        <label htmlFor="specification" className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Specification / Additional Details
        </label>
        <input
          id="specification"
          name="specification"
          type="text"
          value={form.specification}
          onChange={handleChange}
          placeholder="e.g., 60 Shore A hardness, 5mm thickness"
          className={inputClasses('specification')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your rubber product requirement..."
          className={inputClasses('message')}
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* File upload */}
      <div>
        <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
          Attachment (Optional)
        </label>
        <label className="flex items-center gap-2 px-4 py-3 border border-dashed border-charcoal-300 rounded-lg cursor-pointer hover:border-forest-400 transition-colors">
          <Paperclip size={16} className="text-charcoal-400" />
          <span className="text-sm text-charcoal-500">
            {fileName || 'Upload a drawing, specification, or reference file'}
          </span>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.dwg,.step,.stp"
          />
        </label>
      </div>

      {/* Error State */}
      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        loading={status === 'loading'}
        icon={Send}
        className="w-full sm:w-auto"
      >
        Submit Inquiry
      </Button>
    </form>
  );
}
