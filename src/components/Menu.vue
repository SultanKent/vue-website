<template>
<div class="Menu">
  <div class="Menu_main">
    <img src='../assets/logo.png' alt="logo" class="logo">
    <div class="burger-icon" @click="toggleBurgerMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
    <div class="navbar" :class="{ 'active': isBurgerMenuOpen }">
      <div class="navbar_main" :class="{ 'active': isBurgerMenuOpen }">
      <router-link to="/">Главная</router-link>
      <router-link to="/About">О компаний</router-link>
      <router-link to="/Works">Наши работы</router-link>
      <router-link to="/Review">Отзывы</router-link>
      <router-link to="/Articles">Статьи</router-link>
      <router-link to="/Contacts">Контакты</router-link>
      </div>
    </div>
    <div class="telegram">
      <img src="../assets/telegram.png" alt="telegram">
      <p>+7 (925) 517-99-71</p>
    </div>
  </div>
</div>
</template>


<script>
export default {
  data() {
    return {
      isBurgerMenuOpen: false
    };
  },
  methods: {
    toggleBurgerMenu() {
      this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
       if (this.isBurgerMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }
}
</script>


<style scoped lang="scss">
.Menu {
    background: #131010;
    padding: 26px 130px;
    @media(max-width: 1350px) {
        padding: 26px 75px;
    }
    @media(max-width: 480px) {
        padding: 26px 40px;
    }
    .Menu_main {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .logo {
            width: 142px;
            height: 42px;
            z-index: 4;
            @media(max-width: 940px) {
              position: relative;
              left: 37%;
            }
            @media(max-width: 480px) {
              width: 80px;
              height: 32px;
            }
        }
        .burger-icon {
          flex-direction: column;
          cursor: pointer;
          z-index: 4;
          position: fixed;
          display: none;
          @media(max-width: 940px) {
            display: flex;
          }
          .bar {
            width: 30px;
            height: 4px;
            background-color: #fff;
            margin: 4px;
            transition: 0.4s;
          }
        }
        .navbar {
          display: flex;
          gap: 40px;
          white-space: nowrap;
            @media(max-width: 1350px) {
                gap: 20px;
            }
            @media(max-width: 940px) {
              position: fixed;
              top: 0px; 
              left: 0;
              width: 100%;
              height: calc(100vh - 100px); 
              background-color: #131010;
              padding: 20px;
              z-index: 3;
              animation: slideUp 0.5s ease forwards;
              visibility: hidden;
              @keyframes slideUp {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-100%);
                }
              }
              body.overflow-hidden {
                overflow: hidden;
              }
            }
            .navbar_main {
              display: flex;
              gap: 40px;
              white-space: nowrap;
                @media (max-width: 940px) {
                  visibility: hidden;
                  flex-direction: column;
                  align-items: center;
                  position: relative;
                  top: 30%;
                }
            }
            .navbar_main.active {
              visibility: unset;
            }
        }
        .navbar.active {
            overflow: hidden;
            display: block;
            height: 100%;
            visibility: unset;
        }
        .telegram {
            display: flex;
            gap: 15px;
            z-index: 4;
            >img {
                width: 24px;
                height: 24px;
            }
            >p {
                @media(max-width: 1350px) {
                    display: none;
                }
            }
        }
    }

.navbar.active {
  animation: slideDown 0.5s ease forwards;
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
}
</style>