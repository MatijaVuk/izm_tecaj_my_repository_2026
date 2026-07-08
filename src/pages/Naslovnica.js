import { useEffect, useState } from "react";

import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";

function Naslovnica() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch("https://front3.edukacija.online/backend/wp-json/wp/v2/pages/437")
      .then((res) => res.json())
      .then((data) => setPage(data));
  }, []);

  if (!page) return <p>Učitavanje</p>;

  return (
    
      <div className="container" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
    
  );
}

export default Naslovnica;
