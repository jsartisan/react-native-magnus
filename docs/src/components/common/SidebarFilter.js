import React from 'react';

export default function SidebarFilter({ onChange }) {
  return (
    <form action="" className="mt-4 py-3">
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
