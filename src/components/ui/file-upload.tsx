import { useState } from "react";
import { Dropzone, FileMosaic } from "@files-ui/react";

export default function FileUpload({ onFilesChange }: { onFilesChange?: (files: File[]) => void }) {
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (newFiles: File[]) => {
    setFiles(newFiles);
    if (onFilesChange) onFilesChange(newFiles);
  };

  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-2 block">
        Pièces jointes (optionnel)
      </label>
      <Dropzone onChange={handleChange} value={files}>
        {files.map((file) => (
          <FileMosaic {...file} preview />
        ))}
      </Dropzone>
    </div>
  );
}
