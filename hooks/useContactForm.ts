'use client';

import { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface UseContactFormOptions {
  // Choose between 'formsubmit' or 'supabase'
  provider?: 'formsubmit' | 'supabase';
  // Email for formsubmit provider
  email?: string;
}

interface UseContactFormReturn {
  isSubmitting: boolean;
  status: 'success' | 'error' | null;
  statusMsg: string;
  submitForm: (data: ContactFormData) => Promise<boolean>;
  resetStatus: () => void;
}

export function useContactForm(options: UseContactFormOptions = {}): UseContactFormReturn {
  const {
    provider = 'formsubmit',
    email = 'sales@thelotusroots.co.uk',
  } = options;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const [statusMsg, setStatusMsg] = useState('');

  const resetStatus = () => {
    setStatus(null);
    setStatusMsg('');
  };

  const submitViaFormSubmit = async (data: ContactFormData): Promise<boolean> => {
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          _subject: 'New Contact Form Submission - The Lotus Roots',
          _template: 'table',
          _captcha: 'false',
          _cc: 'gaurav.b@brainminetech.com',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success === 'true' || result.success === true) {
        setStatus('success');
        setStatusMsg('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
        return true;
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch {
      // Fallback to mailto
      const subject = encodeURIComponent('New Contact Form Submission - The Lotus Roots');
      const body = encodeURIComponent(
        `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Company: ${data.company}\n` +
        `Service: ${data.service}\n` +
        `Message: ${data.message}`
      );

      const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

      setStatus('error');
      setStatusMsg(
        `Network error occurred. Please try again or ` +
        `<a href="${mailtoLink}" class="text-yellow-300 underline hover:text-yellow-200">click here to send via email</a>`
      );
      return false;
    }
  };

  const submitViaSupabase = async (data: ContactFormData): Promise<boolean> => {
    try {
      // Dynamic import to avoid loading Supabase if not used
      const { supabase } = await import('@/lib/supabase');

      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          service: data.service,
          message: data.message,
        }]);

      if (error) {
        throw error;
      }

      setStatus('success');
      setStatusMsg('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
      return true;
    } catch (error) {
      console.error('Supabase submission error:', error);
      setStatus('error');
      setStatusMsg('Failed to submit form. Please try again or contact us directly.');
      return false;
    }
  };

  const submitForm = async (data: ContactFormData): Promise<boolean> => {
    setIsSubmitting(true);
    resetStatus();

    // Basic validation
    if (!data.name.trim()) {
      setStatus('error');
      setStatusMsg('Please enter your full name.');
      setIsSubmitting(false);
      return false;
    }

    if (!data.phone.trim() && !data.email.trim()) {
      setStatus('error');
      setStatusMsg('Please provide either your phone number or email address.');
      setIsSubmitting(false);
      return false;
    }

    let success = false;

    if (provider === 'supabase') {
      success = await submitViaSupabase(data);
    } else {
      success = await submitViaFormSubmit(data);
    }

    setIsSubmitting(false);
    return success;
  };

  return {
    isSubmitting,
    status,
    statusMsg,
    submitForm,
    resetStatus,
  };
}
