export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numItems === 0
          ? "No items yet"
          : percentage === 100
          ? "All done!"
          : `
          You have ${numItems ?? 0} items on your list, and you already packed
          ${numPackedItems ?? 0} (${percentage || 0}%)`}
      </em>
    </footer>
  );
}
