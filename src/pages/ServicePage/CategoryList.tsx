import React, { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface CategoryListProps {
  onCategorySelect: (category: string | null) => void;
}

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

const CategoryList: React.FC<CategoryListProps> = ({ onCategorySelect }) => {
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

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      onCategorySelect(null);
    } else {
      setSelectedCategory(category);
      onCategorySelect(category);
    }
  };

  const handleDeselect = () => {
    setSelectedCategory(null);
    onCategorySelect(null);
  };

  return (
    <div className="category-list">
      <h3 style={{ display: "flex", alignItems: "center" }}>
        <ListIcon style={{ marginRight: "8px" }} /> Danh Mục
      </h3>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? "selected" : ""}
            style={{
              backgroundColor:
                selectedCategory === category ? "#3498db" : "transparent",
              color: selectedCategory === category ? "white" : "inherit",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              {selectedCategory === category && (
                <span className="play-icon">▶</span>
              )}
              {category}
            </span>
            {selectedCategory === category && (
              <span
                onClick={handleDeselect}
                style={{ cursor: "pointer", marginLeft: "8px" }}
              >
                x
              </span>
            )}
          </li>
        ))}
        <li className="more" onClick={toggleExpand}>
          {expanded ? "Thu gọn" : "Thêm"}{" "}
          {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
