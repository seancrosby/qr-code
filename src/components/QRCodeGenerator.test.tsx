import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import QRCodeGenerator from './QRCodeGenerator';
import QRCode from 'qrcode';

// Mock the qrcode library
vi.mock('qrcode', () => ({
  default: {
    toDataURL: vi.fn().mockResolvedValue('mocked-data-url'),
  },
}));

describe('QRCodeGenerator', () => {
  it('renders the initial state correctly', () => {
    render(<QRCodeGenerator />);
    expect(screen.getByText('QR Code Generator')).toBeInTheDocument();
    expect(screen.getByLabelText('Enter URL')).toBeInTheDocument();
    expect(screen.getByText('Enter a URL to generate a QR code')).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<QRCodeGenerator />);
    const input = screen.getByLabelText('Enter URL') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'https://google.com' } });
    expect(input.value).toBe('https://google.com');
  });

  it('generates a QR code when a URL is entered', async () => {
    render(<QRCodeGenerator />);
    const input = screen.getByLabelText('Enter URL');
    fireEvent.change(input, { target: { value: 'https://google.com' } });

    await waitFor(() => {
      expect(QRCode.toDataURL).toHaveBeenCalledWith('https://google.com', expect.any(Object));
      expect(screen.getByAltText('Generated QR Code')).toBeInTheDocument();
      expect(screen.getByText('Download PNG')).toBeInTheDocument();
    });
  });

  it('clears the QR code when the input is empty', async () => {
    render(<QRCodeGenerator />);
    const input = screen.getByLabelText('Enter URL');
    
    // First set a URL
    fireEvent.change(input, { target: { value: 'https://google.com' } });
    await waitFor(() => {
      expect(screen.getByAltText('Generated QR Code')).toBeInTheDocument();
    });

    // Then clear it
    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(screen.queryByAltText('Generated QR Code')).not.toBeInTheDocument();
      expect(screen.getByText('Enter a URL to generate a QR code')).toBeInTheDocument();
    });
  });
});
