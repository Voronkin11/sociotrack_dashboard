export const renderContentList = (data, containerClass) => {
    const container = document.querySelectorAll(containerClass)[0];
    let list = "";
    
    for(let item of data) {
        list +=`
            <li class="content-list__item">
                <div class="social-card">
                    <a href="${item.url}" target="_blank" class="social-card__square">
                        <div class="social-card__box social-card__box--${item.cssModifier}">
                            <div class="social-card__logo">
                                <img src="${item.networkIcon}" alt="network icon">
                            </div>
                            <div class="social-card__center">
                                <p class="social-card__quantity">${item.followerQuantity}</p>
                                <p class="social-card__title">${item.followerTitle}</p>
                            </div>
                            <div class="social-card__bottom">
                                <p class="social-card__progress ${
                                    (item.progress.charAt(0) === "-") ? "social-card__progress--down" :
                                    (item.progress.charAt(0) === "+") ? "social-card__progress--up": ""
                                }">${item.progress}</p>
                            </div>
                        </div>
                    </a>
                    <div class="social-card__user-data">
                        <div class="social-card__user-picture">
                            <img src="${item.userPicture}" alt="user">
                        </div>
                        <div class="social-card__user-text">
                            <p class="social-card__network">${item.networkName}</p>
                            <p class="social-card__user">${item.userAccount}</p>
                        </div>
                    </div>
                </div>
            </li>`
        
    }
    container.innerHTML = list;
}