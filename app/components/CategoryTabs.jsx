'use client';

const categories = [
    { id: 'all', label: 'All' },
    { id: 'website', label: 'Website' },
    { id: 'image', label: 'Image' },
    { id: 'video', label: 'Video' },
];

export default function CategoryTabs({ activeCategory, onCategoryChange }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onCategoryChange(category.id)}
                    className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
}
