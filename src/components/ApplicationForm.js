import React, { useEffect } from "react";
import "../css/style.css";

function ApplicationForm() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  return (
    <div className="float-r">
      <iframe
        title="application form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSddRNJ7fIuGH1tQ8lWQ5NUMwwRhdq3O3yS-NQaRYq2SYby2nQ/viewform?embedded=true"
        width="700"
        height="520"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default ApplicationForm;
