import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchResults from '../app/components/SearchResults';
import { vi } from 'vitest';

const jobs = [
  {
    id: 1,
    title: 'Test Job',
    company: 'ACME',
    category: 'Dev',
    type: 'Full Time',
    salary: '$1',
    location: 'Remote',
    logo: '/svg/FSD.svg',
  },
];

describe('SearchResults modal', () => {
  it('renders with role dialog and aria-modal', () => {
    render(<SearchResults jobs={jobs} onClose={() => {}} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('calls onClose when overlay clicked', () => {
    const onClose = vi.fn();
    render(<SearchResults jobs={jobs} onClose={onClose} />);
    const overlay = document.querySelector('.SearchResultmodalBackground');
    expect(overlay).toBeInTheDocument();
    fireEvent.click(overlay!);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape pressed', () => {
    const onClose = vi.fn();
    render(<SearchResults jobs={jobs} onClose={onClose} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
