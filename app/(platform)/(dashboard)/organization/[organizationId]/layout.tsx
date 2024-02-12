import { OrgControl } from './_components/org-control';

const OrganizationIdLayoyut = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLayoyut;
