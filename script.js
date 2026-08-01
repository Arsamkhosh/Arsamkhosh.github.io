document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const cardsGrid = document.getElementById("cardsGrid");
    const searchInput = document.getElementById("searchInput");
    const clearSearchBtn = document.getElementById("clearSearch");
    const emptyState = document.getElementById("emptyState");
    
    const headerDate = document.getElementById("headerDate");
    const headerClock = document.getElementById("headerClock");
    const selectedAreaHeader = document.getElementById("selectedAreaHeader");
    const statCount = document.getElementById("statCount");
    const statUpdate = document.getElementById("statUpdate");

    // Initialize Header details from config.js
    headerDate.textContent = powerOutages.date;
    statUpdate.textContent = powerOutages.lastUpdate;
    selectedAreaHeader.textContent = powerOutages.area;

    // Live Clock Function
    function updateLiveClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        headerClock.textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateLiveClock, 1000);
    updateLiveClock();

    // Helper: Calculate duration between start and end time strings
    function calculateDuration(start, end) {
        try {
            const [startH, startM] = start.split(':').map(Number);
            const [endH, endM] = end.split(':').map(Number);
            
            let startMinutes = startH * 60 + startM;
            let endMinutes = endH * 60 + endM;
            
            if (endMinutes < startMinutes) {
                endMinutes += 24 * 60;
            }
            
            const diffMinutes = endMinutes - startMinutes;
            const hours = Math.floor(diffMinutes / 60);
            const minutes = diffMinutes % 60;
            
            let result = "";
            if (hours > 0) result += `${hours} ساعت `;
            if (minutes > 0) result += `${minutes} دقیقه`;
            return result.trim() || "نامشخص";
        } catch (e) {
            return "۲ ساعت";
        }
    }

    // Render Statistics (Only Count)
    function updateStatistics(dataList) {
        statCount.textContent = dataList.length;
    }

    // Render Outage Cards
    function renderOutages(filterQuery = "") {
        cardsGrid.innerHTML = "";
        
        const filtered = powerOutages.outages.filter(item => 
            item.name.toLowerCase().includes(filterQuery.toLowerCase().trim())
        );

        updateStatistics(filtered);

        if (filtered.length === 0) {
            emptyState.style.display = "flex";
            return;
        } else {
            emptyState.style.display = "none";
        }

        filtered.forEach((item, index) => {
            const durationText = calculateDuration(item.start, item.end);
            
            const card = document.createElement("div");
            card.className = "outage-card";
            card.style.animation = `fadeInUp 0.4s ease forwards ${index * 0.05}s`;
            
            card.innerHTML = `
                <div class="card-header">
                    <span class="neighborhood-name">📍 ${item.name}</span>
                    <span class="status-badge">
                        <i class="fa-solid fa-triangle-exclamation"></i> خاموشی برنامه‌ریزی شده
                    </span>
                </div>
                <div class="card-body">
                    <div class="card-row">
                        <span class="label"><i class="fa-regular fa-clock"></i> زمان:</span>
                        <span class="value">${item.start} تا ${item.end}</span>
                    </div>
                    <div class="card-row">
                        <span class="label"><i class="fa-solid fa-hourglass-start"></i> مدت:</span>
                        <span class="value duration-val">${durationText}</span>
                    </div>
                </div>
                ${item.description ? `
                <div class="card-description">
                    <i class="fa-solid fa-circle-info"></i>
                    <span>${item.description}</span>
                </div>` : ''}
            `;
            cardsGrid.appendChild(card);
        });
    }

    // Search Input Event Listeners
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value;
        clearSearchBtn.style.display = value ? "block" : "none";
        renderOutages(value);
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
        renderOutages("");
    });

    // Initial Render Call
    renderOutages();
});