import request from "@/api/request"; // 引入封装好的axios

// banner
export function banner() {
  return request({
    url: "banner",
    method: "get",
  });
}
