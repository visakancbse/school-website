import React, { useEffect } from "react";

function ApplicationForm() {
  useEffect(() => {
    window.document.documentElement.scrollTop = "0";
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <iframe
        title="Application"
        src="https://docs.google.com/forms/d/e/1FAIpQLSddRNJ7fIuGH1tQ8lWQ5NUMwwRhdq3O3yS-NQaRYq2SYby2nQ/viewform?embedded=true"
        width="640"
        height="1922"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        loading={<h1>Loading..</h1>}
      >
        <h1>Loading....</h1>
      </iframe>
    </div>
  );
}

export default ApplicationForm;
