import { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../apiBase.js';

const roofTypes = ['Asphalt Shingles', 'Metal', 'Tile', 'Flat/TPO', 'Slate', 'Wood Shake', 'Other'];
const damageTypes = ['Storm Damage', 'Hail Damage', 'Wind Damage', 'Leak/Water Damage', 'Missing Shingles', 'Complete Replacement', 'New Installation', 'Other'];

export default function EstimateForm({ compact = false, variant = 'estimate' }) {
  const isContact = variant === 'contact';
  const [form, setForm] = useState({
    name: '', phone: '', email: '', address: '',
    roofType: '', damageType: '', notes: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (isContact) {
      if (!form.message.trim()) e.message = 'Message is required';
    } else {
      if (!form.address.trim()) e.address = 'Address is required';
      if (!form.roofType) e.roofType = 'Select a roof type';
      if (!form.damageType) e.damageType = 'Select damage type';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const payload = isContact
        ? {
            name: form.name,
            phone: form.phone,
            email: form.email,
            message: form.message,
            source: 'contact-page',
          }
        : {
            name: form.name,
            phone: form.phone,
            email: form.email,
            address: form.address,
            roofType: form.roofType,
            damageType: form.damageType,
            notes: form.notes,
            source: 'estimate-form',
          };
      const res = await axios.post(apiUrl('/api/leads'), payload);
      setStatus('success');
      setMessage(res.data.message);
      setForm({ name: '', phone: '', email: '', address: '', roofType: '', damageType: '', notes: '', message: '' });
    } catch (err) {
      setStatus('error');
      setMessage(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border font-body text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-rhino-blue-mid ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white focus:border-rhino-blue-mid'
    }`;

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="font-heading font-black text-2xl text-rhino-blue mb-3">You're All Set!</h3>
        <p className="font-body text-gray-600 mb-6">{message}</p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-blue"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  if (isContact) {
    return (
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass('name')} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass('email')} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Phone *</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="(346) 733-8558" className={inputClass('phone')} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="How can we help?"
            className={`${inputClass('message')} resize-none min-h-[120px]`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-body">{message}</div>
        )}
        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-base py-4">
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 border-2 border-rhino-blue border-t-transparent rounded-full animate-spin" />
              Submitting...
            </span>
          ) : (
            'Submit — Free Inspection Request'
          )}
        </button>
        <p className="text-center text-xs text-gray-400 font-body">
          We’ll contact you within 30 minutes during business hours. No spam — no obligation.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={compact ? '' : 'space-y-4'}>
      <div className={`grid ${compact ? 'grid-cols-1 gap-3' : 'grid-cols-1 md:grid-cols-2 gap-4'}`}>
        {/* Name */}
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass('name')} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        {/* Phone */}
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Phone Number *</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" className={inputClass('phone')} />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        {/* Email */}
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Email Address *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputClass('email')} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        {/* Address */}
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Property Address *</label>
          <input name="address" value={form.address} onChange={handleChange} placeholder="123 Main St, City, TX" className={inputClass('address')} />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>
        {/* Roof Type */}
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Roof Type *</label>
          <select name="roofType" value={form.roofType} onChange={handleChange} className={inputClass('roofType')}>
            <option value="">Select roof type...</option>
            {roofTypes.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          {errors.roofType && <p className="text-red-500 text-xs mt-1">{errors.roofType}</p>}
        </div>
        {/* Damage Type */}
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Service Needed *</label>
          <select name="damageType" value={form.damageType} onChange={handleChange} className={inputClass('damageType')}>
            <option value="">Select service type...</option>
            {damageTypes.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          {errors.damageType && <p className="text-red-500 text-xs mt-1">{errors.damageType}</p>}
        </div>
      </div>

      {/* Notes */}
      {!compact && (
        <div>
          <label className="block text-xs font-heading font-semibold text-gray-700 mb-1 uppercase tracking-wide">Additional Notes</label>
          <textarea
            name="notes" value={form.notes} onChange={handleChange} rows={3}
            placeholder="Describe the issue or any specific concerns..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-rhino-blue-mid focus:border-rhino-blue-mid resize-none"
          />
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-body">
          {message}
        </div>
      )}

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center text-base py-4">
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-rhino-blue border-t-transparent rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          '🔨 Get My Free Estimate'
        )}
      </button>

      <p className="text-center text-xs text-gray-400 font-body">
        No spam. We'll contact you within 30 minutes during business hours. 100% free — no obligation.
      </p>
    </form>
  );
}
