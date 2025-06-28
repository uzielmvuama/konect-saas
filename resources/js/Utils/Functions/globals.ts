// export function ucfirst(str: string): string {
//   if (!str) return str; // si la chaîne est vide, on la retourne telle quelle
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function ucfirst(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return "";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

export function pluralize(word: string, count: number, pluralForm?: string): string {
  if (count === 1) return word;
  return pluralForm ?? word + "s";
}

export const getCroppedImg = (
  imageSrc: string,
  croppedAreaPixels: CroppedArea
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        canvas.toDataURL("image/jpeg");
        resolve(canvas.toDataURL("image/jpeg")); // Retourne l'image recadrée en Base64
      } else {
        reject(new Error("Le contexte 2D du canvas n'est pas disponible."));
      }
    };
    image.onerror = reject;
  });
};

export function extractMimeTypeAndExtension(base64: string) {
  const match = base64.match(/^data:(image\/\w+);base64,/);
  if (!match) {
    throw new Error("Format Base64 invalide");
  }
  const mimeType = match[1];
  const extension = mimeType.split("/")[1];
  return { mimeType, extension };
}

export function base64ToBlob(base64: string): Blob {
  const { mimeType } = extractMimeTypeAndExtension(base64);

  const byteCharacters = atob(base64.split(",")[1]); // Ignore l'en-tête MIME
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}
