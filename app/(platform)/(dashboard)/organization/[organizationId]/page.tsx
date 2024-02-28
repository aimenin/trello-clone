import { db } from '@/lib/db';
import { Form } from './form';

const OrganizationPage = async () => {
  const boards = await db.board.findMany({});

  return (
    <div className="flex flex-col flex-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>Board title: {board.title}</div>
        ))}
      </div>
    </div>
  );
};

export default OrganizationPage;
