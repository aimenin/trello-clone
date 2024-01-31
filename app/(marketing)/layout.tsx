const MarketingLayout = ({ children }: { childred: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      {/* Header */}
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default MarketingLayout;
