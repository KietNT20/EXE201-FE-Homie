import React, { useState } from 'react';
import { FaListUl, FaChevronDown, FaChevronUp} from 'react-icons/fa';

const initialCategories = [
  "Dọn dẹp nhà cửa",
  "Giặt giũ, ủi đồ",
  "Nấu ăn",
  "Chăm sóc trẻ em",
];

const additionalCategories = [
  "Sửa chữa nhà cửa",
  "Chăm sóc thú cưng",
  "Dạy học",
  "Làm vườn",
];

const CategoryList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [categories, setCategories] = useState(initialCategories);

  const toggleExpand = () => {
    if (expanded) {
      setCategories(initialCategories);
    } else {
      setCategories([...initialCategories, ...additionalCategories]);
    }
    setExpanded(!expanded);
  };

  return (
    <div className="category-list">
      <h3 style={{ display: 'flex', alignItems: 'center' }}>
        <FaListUl style={{ marginRight: '8px' }} /> Danh Mục
      </h3>
      <ul>
        {categories.map((category, index) => (
          <li 
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? 'selected' : ''}
          >
            {selectedCategory === category && <span className="play-icon">▶</span>}      
            {category}
          </li>
        ))}
        <li className="more" onClick={toggleExpand}>
          {expanded ? 'Thu gọn' : 'Thêm'} {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;