const btn = document.querySelector('#share-btn');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#closeModal');

btn.addEventListener('click', function () {
    const element = `
        <div class="main__info--footer-btn-modal">
            <p class="modal-share">SHARE</p>
            <div class="modal-share-items">
                <ul>
                    <li>
                        <a href="#">
                            <img src="../images/icon-facebook.svg" alt="Facebook">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/icon-twitter.svg" alt="Twitter">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../images/icon-pinterest.svg" alt="Pinterest">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `

    modal.innerHTML = element;
});
