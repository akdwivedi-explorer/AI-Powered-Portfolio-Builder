"use client";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div 
      style={{
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    >
      {children}
    </div>
  );
}
