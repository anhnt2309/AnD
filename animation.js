//<![CDATA[

    // FILL VÀO CÁC THÔNG TIN

    $(document).ready(function () {
        // Thông tin chú rể
        $('.groom_name').text(info_chure.ten)
        $('.groom_birthday').text(info_chure.ngay_sinh)
        $('.groom_father').text(info_chure.bo)
        $('.groom_mother').text(info_chure.me)
        $('.groom_add').text(info_chure.dia_chi)
        $('.gift_groom').attr('src', info_chure.gui_qua)
        $('.groom_des').text(info_chure.mo_ta)
        // Thông tin cô dâu
        $('.bride_name').text(info_codau.ten)
        $('.bride_birthday').text(info_codau.ngay_sinh)
        $('.bride_father').text(info_codau.bo)
        $('.bride_mother').text(info_codau.me)
        $('.bride_add').text(info_codau.dia_chi)
        $('.bride_des').text(info_codau.mo_ta)
        // THÔNG TIN THIỆP CHÍNH
        $('.name_palace').text(invitation.dia_diem)
        $('.invitation_year').text(invitation.nam)
        $('.invitation_month').text(invitation.thang)
        $('.invitation_day').text(invitation.ngay)
        $('.invitation_time').text(invitation.time)
        $('.invitation_address').text(invitation.dia_chi)
        $('.name_day').text(invitation.thu)
        $('.invitation_time').text(invitation.gio)
  
  
        // CÂU CHUYỆN TÌNH YÊU
        $('.story_1').text(story.lan_dau_gap)
        $('.story_2').text(story.hen_ho)
        $('.story_3').text(story.le_dinh_hon)
        $('.story_4').text(story.le_thanh_hon)
  
        // HÌNH ẢNH CÁC SECTION
        $('.banner_top').attr("src", media.banner)
        $('.story_bg').attr("src", media.love_story)
        $('.bride_img').attr("src", info_codau.link_anh)
        $('.countdown_img').attr("src", media.anh_countdown)
        $('.thankyou_img').attr("src", media.anh_thankyou)
        $('.groom_img').attr("src", info_chure.link_anh)
  
        // ALBUM ẢNH
        for (i in album) {
          link_anh = album[i].link_anh
          grid = '<div class="album-item"><a data-fancybox="gallery" href="' + link_anh + '"><img src="' + link_anh + '"alt=""></a></div>'
          $('.album').append(grid)
        }
  
        // DANH SÁCH THIỆP MỜI
        for (s in invitationCard) {
          title = invitationCard[s].tieude
          mapUrl = invitationCard[s].link_ban_do
          invitationImg = invitationCard[s].link_anh_thiep
          invitationPhone = invitationCard[s].phone
  
          listInvitation = ' <div class="invitation-card"> <div class="invitation-media"> <img src="' + invitationImg + '" alt=""> </div> <div class="invitation-body"> <h3 class="invitation-title">' + title + '</h3> <div class="group-button"> <a href="tel:' + invitationPhone + '" class="phone btn btn-dark btn-rouded"> <i class="bx bxs-phone"></i> </a> <a href="' + mapUrl + '" target="_blank" class="btn btn-dark btn-rouded map"> <i class="bx bxs-map" ></i> </a> <button data-fancybox data-src="#gift-box" class="gift btn btn-dark btn-rouded"> <i class="bx bxs-gift" ></i> </button> </div> </div> </div>'
          $('.invitation').append(listInvitation)
        }
        //GỬI QUÀ MOMO
        $('.mono_bank').attr('src', qr_momo)
      });
  
      // COUNTDOWN
      (function () {
        const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
        //I'm adding this section so I don't have to keep updating this pen every year :-)
        //remove this if you don't need it
        let today = new Date(),
          dd = String(today.getDate()).padStart(2, "0"),
          mm = String(today.getMonth() + 1).padStart(2, "0"),
          yyyy = today.getFullYear(),
          nextYear = yyyy,
          dayMonth = invitation.thang + "/" + invitation.ngay + "/"
        // "11/22/",
        birthday = dayMonth + yyyy;
  
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
  
        const countDown = new Date(birthday).getTime(),
          x = setInterval(function () {
  
            const now = new Date().getTime(),
              distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
              document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
              document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
              document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
            //do something later when date is reached
            if (distance < 0) {
              document.getElementById("countdown").style.display = "none";
              document.getElementById("content").style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());
      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 500) {
          $('#toTop').fadeIn(400);
        } else {
          $('#toTop').fadeOut(400);
        }
      });
  
      $("#toTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 400);
      });
  
  
  
      //]]>