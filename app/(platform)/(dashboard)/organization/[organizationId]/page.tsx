import { createBoard } from '@/actions/create-board';
import { Button } from '@/components/ui/button';

const OrganizationPage = () => {
  return (
    <div>
      <form action={createBoard}>
        <input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default OrganizationPage;
