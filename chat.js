document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.getElementById("message-input");
  const sendButton = document.querySelector(".send-button");
  const chatContent = document.querySelector(".chat-content");

  // Thêm sự kiện keypress để kiểm tra nếu phím Enter được nhấn
  messageInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn chặn mặc định của phím Enter
      sendMessage();
    }
  });

  // Thêm sự kiện click cho nút Gửi
  sendButton.addEventListener("click", sendMessage);

  function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");

      const senderElement = document.createElement("div");
      senderElement.classList.add("sender");
      senderElement.textContent = "Bạn";

      const textElement = document.createElement("div");
      textElement.classList.add("text");
      textElement.textContent = messageText;

      const messageLength = messageText.length;
      const backgroundColor = getMessageBackgroundColor(messageLength);
      messageElement.style.backgroundColor = backgroundColor;

      const timestampElement = document.createElement("div");
      timestampElement.classList.add("timestamp");
      const timestamp = new Date().toLocaleTimeString();
      timestampElement.textContent = timestamp;

      messageElement.appendChild(senderElement);
      messageElement.appendChild(textElement);
      messageElement.appendChild(timestampElement);

      chatContent.appendChild(messageElement);

      messageInput.value = "";
    }
  }
});

    function getMessageBackgroundColor(length) {
      if (length < 10) {
        return "#c6e2ff"; 
      } else if (length < 20) {
        return "#a4d8ff"; 
      } else {
        return "#8ab6d6"; 
      }
    }
  document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".fa-solid.fa-trash.icon");
    const deleteModal = document.getElementById("deleteModal");
    const confirmDeleteBtn = document.getElementById("confirmDelete");
    const cancelDeleteBtn = document.getElementById("cancelDelete");

    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        deleteModal.style.display = "block";
        // Lưu trữ phần tử li để xóa sau khi xác nhận
        const listItem = button.closest("li");

        confirmDeleteBtn.addEventListener("click", function () {
          // Xác nhận xóa và đóng modal
          listItem.remove();
          deleteModal.style.display = "none";
        });

        cancelDeleteBtn.addEventListener("click", function () {
          // Hủy và đóng modal
          deleteModal.style.display = "none";
        });
      });
    });
  });
  document.getElementById('createChatButton').addEventListener('click', function() {
    // Tạo một đoạn chat mới
    const newChat = document.createElement('li');
    newChat.innerHTML = `
      <p>Đoạn chat mới</p>
      <button><i class="fa-solid fa-trash icon"></i></button>
    `;

    // Thêm sự kiện click để xử lý việc xóa đoạn chat
    const deleteButton = newChat.querySelector('button');
    deleteButton.addEventListener('click', function() {
      // Hiển thị modal xác nhận xóa
      document.getElementById('deleteModal').style.display = 'block';

      // Xác nhận xóa
      document.getElementById('confirmDelete').addEventListener('click', function() {
        // Xóa đoạn chat khi nút xác nhận được click
        newChat.remove();
        // Ẩn modal
        document.getElementById('deleteModal').style.display = 'none';
      });

      // Hủy xóa
      document.getElementById('cancelDelete').addEventListener('click', function() {
        // Ẩn modal
        document.getElementById('deleteModal').style.display = 'none';
      });
    });

    // Thêm đoạn chat mới vào danh sách
    document.querySelector('.listview ul').appendChild(newChat);
  });
// Function to toggle the dropdown
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  var dropdownButton = document.getElementById("dropdownBtn");
  if (event.target !== dropdownButton && !event.target.matches('.dropdown-content a')) {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = "none";
  }
}
// Thêm vào đầu tệp JavaScript hoặc trong phần script của bạn
document.addEventListener("DOMContentLoaded", function () {
  // Lắng nghe sự kiện click cho liên kết "Đăng xuất"
  document.getElementById("logoutLink").addEventListener("click", function (event) {
    // Ngăn chặn hành vi mặc định của liên kết (tránh chuyển hướng)
    event.preventDefault();

    // Thực hiện các bước cần thiết cho việc đăng xuất, ví dụ: xóa thông tin đăng nhập từ local storage

    // Chuyển hướng về trang chính (index.html)
    window.location.href = "./index.html";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Lắng nghe sự kiện click cho liên kết "Lịch sử trò chuyện"
  document.getElementById("historyLink").addEventListener("click", function (event) {
    // Ngăn chặn hành vi mặc định của liên kết (tránh chuyển hướng)
    event.preventDefault();

    // Chuyển hướng đến trang "history.html"
    window.location.href = "./history.html";
  });
});
