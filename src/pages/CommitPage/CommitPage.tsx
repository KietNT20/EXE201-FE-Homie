import logoCommit from "@/assets/z5887437884214_65e5a423e0ea91c635acb4c1c09fa113.png";

const CommitPage = () => {
  return (
    <div className="commit-container">
      <div className="commit-image">
        <div className="commit-overlay">
          <h1>Cam Kết Của Homie</h1>
          <p className="breadcrumb">Trang chủ / Cam kết</p>
        </div>
      </div>
      <div className="commit-1">
        <img src={logoCommit} alt="" />
      </div>
    </div>
  );
};

export default CommitPage;
