'use client';

export default function SidebarFilter({ onChange }) {
  return (
    <form action="" className="mt-4 py-3" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <input
          onChange={onChange}
          type="search"
          className="w-full border rounded p-1 px-2"
          placeholder="Filter..."
        />
      </div>
    </form>
  );
}
