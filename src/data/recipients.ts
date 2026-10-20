import type { Recipient } from "@/types/recipient";

// Chỉ cần sửa danh sách này để cá nhân hóa món quà cho từng người.
export const recipients: Recipient[] = [
  { id: "girl-1", name: "Mom", password: "2305", greeting: "hôm lay là 20th10-ngày quốc tế phụ nữ Việt Nam, chúc mom luôn vui vẻ và có nhiều sức khỏe, hạn chế bệnh vặt và ăn nhiều, luôn tích cực trong mọi hoàn cảnh của cuộc sống, mong mẹ có 1 năm đi làm thuận lợi và 1 tinh thần luôn lạc quan trước mọi tình huống, chik chúc mẹ luôn xinh đẹp và cười nhiều" },
  { id: "girl-2", name: "Cún nhái", password: "0502", greeting: "tuất nhái 20 tháng 10 vui vẻ, luôn ăn nhiều và luôn khùng như mọi ngày, đi làm thuận lợi, đập hết những ai trong công ty mà nhái không ưa, tui hay láo lếu zay thôy chứ tui k có géc nhái, nhớ ăn uống có chọn lọc, đừng để bệnh thêm mất công đứa em này vác thân đi thăm khám ( đi học đủ mệt l rôi ), chúc nhái nhiều skhoe, siêng năng đi làm kiếm tiền nuôi em và mua ip18 cho em" },
];

export const findRecipient = (id: string) => recipients.find((recipient) => recipient.id === id);
