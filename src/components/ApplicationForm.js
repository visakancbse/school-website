import React, { useEffect } from "react";
import "../css/style.css";

function ApplicationForm() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  return (
    <div>
      <iframe
        title="application form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSddRNJ7fIuGH1tQ8lWQ5NUMwwRhdq3O3yS-NQaRYq2SYby2nQ/viewform?embedded=true"
        width="100%"
        height="520"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default ApplicationForm;
