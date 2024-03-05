'use client';

import data from '@/data/sellers.json' assert { type: 'json' };
import { type ChangeEvent, useState, type FormEvent } from 'react';
import LoadingSpinner from './LoadingSpinner';

type ColorFormProps = {
  handleApiResponse: (title: string, content: string) => void;
};

const ColorForm = (props: ColorFormProps) => {
  const { handleApiResponse } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    currentColor: '',
    nextColor: '',
    itemId: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      // Make a POST request to the API endpoint
      const response = await fetch('/api/change-color', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        const apiResponse = await response.json();

        // Handle API response
        handleApiResponse(apiResponse.title, apiResponse.content);
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      // Reset form data and loading state
      setFormData({
        currentColor: '',
        nextColor: '',
        itemId: '',
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col max-w-md mx-auto my-2 px-6 bg-white">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h2 className="text-3xl font-semibold text-center mb-10">CAMBIO DE COLOR</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="itemId" className="block text-sm font-medium text-gray-600">
                Item Id
              </label>
              <select
                id="itemId"
                name="itemId"
                value={formData.itemId}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="">Select...</option>
                {data.map((seller) =>
                  seller.items.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.id}
                    </option>
                  )),
                )}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="currentColor" className="block text-sm font-medium text-gray-600">
                Color Actual
              </label>
              <select
                id="currentColor"
                name="currentColor"
                value={formData.currentColor}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="">Select...</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div className="mb-10">
              <label htmlFor="nextColor" className="block text-sm font-medium text-gray-600">
                Nuevo Color
              </label>
              <select
                id="nextColor"
                name="nextColor"
                value={formData.nextColor}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="">Select...</option>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Enviar
              </button>
            </div>
          </form>
          <div className="mt-12 pt-12">
            <h3 className="font-semibold mb-2">Patron de Mediador</h3>
            <p className="text-sm">
              El patrón Mediator es un patrón de comportamiento que define un objeto que centraliza
              las comunicaciones entre componentes, evitando que estos se comuniquen directamente
              entre sí. En lugar de tener conexiones directas, los componentes se comunican a través
              del mediador. Esto promueve un bajo acoplamiento entre los componentes y facilita la
              modificación y extensión del sistema.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ColorForm;
