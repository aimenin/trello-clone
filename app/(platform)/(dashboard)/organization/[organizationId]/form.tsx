'use client';

import { createBoard } from '@/actions/create-board';
import { Button } from '@/components/ui/button';
import { useAction } from '@/hooks/use-action';

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log('Board created', data);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border-black border p-1"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
