<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="menu flex">
          <div class="left flex">
            <div class="logo flex">
              <img src="../assets/img/logo.png" alt="" />
              <ul class="flex">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'about' }">About</router-link>
                </li>
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="right-menu flex">
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                    fill="#4C5366"
                  />
                </svg>
              </button>
              <button @click="isModal = !isModal">Войти</button>
              <button class="reg" @click="isLoginModal = !isLoginModal">Регистрация</button>
            </div>
          </div>
        </div>
        <div>
          <div class="over" v-if="isModal == false"></div>
          <div class="over" v-if="isLoginModal == false"></div>

          <div class="modal" v-if="isModal == false">
            <button class="bt" @click="isModal = true">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="22" fill="white" />
                <path
                  d="M22 20.586L26.95 15.636L28.364 17.05L23.414 22L28.364 26.95L26.95 28.364L22 23.414L17.05 28.364L15.636 26.95L20.586 22L15.636 17.05L17.05 15.636L22 20.586Z"
                  fill="black"
                />
              </svg>
            </button>
            <div class="kirish">
              <h2>Kirish</h2>
              <p>Telefon raqam</p>
              <input class="inp" type="text" placeholder="+998 000-00-00" />
              <label for="" class="inp2">
                <input class="inp2" type="checkbox" />
                <p>Eslda qolishi</p>
              </label>
              <div>
                <button>Kirish</button>
                <p>yoki</p>
                <button>Ro'yhatdan o'tish</button>
              </div>
            </div>
          </div>
          <div class="modal2" v-if="isLoginModal == false">
            <button class="bt2" @click="isLoginModal = true">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="22" fill="white" />
                <path
                  d="M22 20.586L26.95 15.636L28.364 17.05L23.414 22L28.364 26.95L26.95 28.364L22 23.414L17.05 28.364L15.636 26.95L20.586 22L15.636 17.05L17.05 15.636L22 20.586Z"
                  fill="black"
                />
              </svg>
            </button>
            <div class="kirish">
              <h2>Kirish</h2>
              <p>Telefon raqam</p>
              <input class="inp" type="text" placeholder="+998 000-00-00" />
              <label for="" class="inp2">
                <input class="inp2" type="checkbox" />
                <p> <ss>Foydalanish</ss> shartlariga rozilik bildiraman</p>
              </label>
              <div>
                <button>Ro'yhatdan o'tish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModal: false,
      isLoginModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  padding: 10px 30px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  z-index: 999;

  .menu {
    .left {
      .logo {
        width: 100%;
        ul {
          margin-left: 50px;
          li {
            margin-right: 12px;
            &.router-link-exact-active {
              background: indianred;
              cursor: pointer;
            }
            a {
              font-weight: 700;
              font-size: 14px;
              line-height: 18px;
              color: #000;
              display: block;
              padding: 15px 10px;
              transition: 0.5s;
              border-radius: 10px;
              &:hover {
                background: #000;
                color: white;
              }
              &.router-link-active {
                background: indianred;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    .right {
      &-menu {
        justify-content: flex-end;
        button {
          margin-left: 24px;

          &.reg {
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 18px;
            color: #ffffff;
            background: #2e3192;
            border-radius: 4px;
            padding: 8px 15px;
          }
        }
      }
    }
  }
  .over {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgb(0, 0, 0, 0.5);
    z-index: 1;
  }
  .modal, .modal2 {
    position: fixed;
    height: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background: #fff;
    border-radius: 10px;
    z-index: 2;
    .bt {
      svg {
        position: absolute;
        right: 0;
        top: 0;
      }
      }
    .bt2 {
      svg {
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
  .kirish {
    padding: 50px 54px;

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 36px;
      line-height: 45px;
      color: #000000;
      margin-bottom: 40px;
    }
    .inp {
      width: 406px;
      height: 50px;
      background: #eeeeee;
      border-radius: 10px;
      border: 0;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
      padding-left: 10px;
      color: rgba(0, 0, 0, 0.7);
      margin-top: 4px;
    }
    label {
      margin-top: 15px;
      margin-bottom: 35px;
      display: flex;
      input[type="checkbox"] {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background: #e5e5e5;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
      }
      p{
        ss{

          color: #0081FE;
        }
      }
    }
    div {
      button {
        width: 406px;
        height: 50px;
        background: #2e3192;
        border-radius: 10px;
        font-weight: 600;
        font-size: 18px;
        line-height: 26px;
        color: #cecfff;
        &:hover{
          border: 1px solid #2e3192;
          color: #2e3192;
          background: transparent;
        }
      }
        p{
          text-align: center;
          margin: 10px 0;
         
        }
    
    }
  }
}
</style>
