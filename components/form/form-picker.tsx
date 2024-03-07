'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

import { unsplash } from '@/lib/unsplash';
import { cn } from '@/lib/utils';

const TRELLO_COLLECTION_ID = '317099';

type Images = Array<Record<string, any>>;
interface FormPickerProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

export const FormPicker = ({ id, errors }: FormPickerProps) => {
  const { pending } = useFormStatus();

  const [images, setImages] = useState<Images>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageId, setSelectedImageId] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const result = await unsplash.photos.getRandom({
          collectionIds: [TRELLO_COLLECTION_ID],
          count: 9,
        });

        if (result && result.response) {
          const resultImages = result.response as Images;
          setImages(resultImages);
        } else {
          console.error('No images found');
        }
      } catch (error) {
        console.log(error);
        setImages([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center">
        <Loader2 className="h-6 w-6 text-sky-700 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-2 mb-2">
        {images.map((image) => (
          <div
            key={image.id}
            className={cn(
              'cirsor-pointer relative aspect-video group hover:opacity-75 transition bg-muted',
              pending && 'opacity-50 hover:opacity-50 cursor-auto'
            )}
            onClick={() => {
              if (pending) return;
              setSelectedImageId(image.id);
            }}
          >
            <Image
              src={image.urls.thumb}
              fill
              alt="unsplash image"
              className="object-cover rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
