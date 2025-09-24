
import { FaFileWord, FaFilePdf, FaDownload, FaEye } from 'react-icons/fa';

const templates = [
  {
    title: 'Modern Resume',
    link: '/templates/modern-resume.docx',
    type: 'docx',
  },
  {
    title: 'Simple ATS Resume',
    link: '/templates/simple-ats-resume.docx',
    type: 'docx',
  },
  {
    title: 'Previewable PDF Template',
    link: '/templates/preview-template.pdf',
    type: 'pdf',
  },
];

function Templates() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">ATS-Friendly Resume Templates</h1>
      <div className="space-y-5 w-full max-w-2xl">
        {templates.map((template, idx) => (
          <div
            key={idx}
            className="bg-white p-5 shadow rounded flex justify-between items-center"
          >
            <div className="flex items-center space-x-3">
              {template.type === 'docx' ? (
                <FaFileWord className="text-blue-500 text-2xl" />
              ) : (
                <FaFilePdf className="text-red-500 text-2xl" />
              )}
              <div>
                <p className="font-semibold text-gray-800">{template.title}</p>
                <span className="text-xs text-gray-500 uppercase">{template.type}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={template.link}
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm flex items-center gap-1"
              >
                <FaDownload /> Download
              </a>

              {template.type === 'pdf' && (
                <a
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1.5 rounded text-sm flex items-center gap-1"
                >
                  <FaEye /> Preview
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Templates;

