export function getCurrentTime() {
    const now = new Date();
    return now.toISOString();  // Trả về thời gian theo định dạng ISO 8601
  }