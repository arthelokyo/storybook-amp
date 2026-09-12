// Encodes a UTF-8 string as base64, the format expected by the online AMP validator.
export default (str) => {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return window.btoa(binary);
};
