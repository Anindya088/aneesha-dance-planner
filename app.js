
    function showPage(pageId, anchorId) {
      document.querySelectorAll('.page-section').forEach(function(s){ s.style.display='none'; });
      document.querySelectorAll('.nav-a').forEach(function(a){ a.classList.remove('active'); });
      var pg = document.getElementById('page-' + pageId);
      if (pg) pg.style.display = 'block';
      var nav = document.querySelector('.nav-a[data-page="' + pageId + '"]');
      if (nav) nav.classList.add('active');
      if (anchorId) {
        setTimeout(function(){
          var el = document.getElementById(anchorId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      } else {
        window.scrollTo(0, 0);
      }
    }

    // ── showPage on load ──
    document.getElementById("page-home").style.display = "block";


    function navigateUpcoming(e) {
      var link = e.link || '';
      var parts = link.split('#');
      var pagePart = parts[0];
      var anchor = parts[1] || '';
      var pageMap = { 'may-2026.html': 'may', 'june-2026.html': 'june', 'events.html': 'events', 'bda-beijing.html': 'bda', 'index.html': 'home' };
      var page = pageMap[pagePart] || 'home';
      showPage(page, anchor || undefined);
    }

    // ── Events page JS ──
function toggleAcc(btn) {
      btn.classList.toggle('open');
      const content = btn.nextElementSibling;
      content.classList.toggle('open');
    }

    // ── May page JS ──
function toggleEv(el) {
      el.classList.toggle('open');
    }
    function toggleShowcase(btn) {
      const details = btn.parentElement.querySelector('.showcase-details');
      const chevron = btn.querySelector('.sc-chevron');
      const isOpen = details.classList.toggle('open');
      chevron.textContent = isOpen ? '▲' : '▼';
      btn.querySelector('span:first-child').textContent = isOpen ? 'Hide Timeline' : 'View Full Day Timeline';
    }
    function scrollToId(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Highlight today
    var today = new Date();
    if (today.getFullYear() === 2026 && today.getMonth() === 4) {
      const dayNum = today.getDate();
      document.querySelectorAll('#page-may .cal-day').forEach(el => {
        const num = el.querySelector('.cal-num');
        if (num && parseInt(num.textContent) === dayNum && !el.classList.contains('empty')) {
          el.classList.add('today');
        }
      });
    }
    function switchMayView(mode, btn) {
      document.getElementById('may-view-list').style.display = 'none';
      document.getElementById('may-view-calendar').style.display = 'none';
      document.getElementById('may-view-gantt').style.display = 'none';
      document.getElementById('may-view-' + mode).style.display = '';
      document.querySelectorAll('#page-may .vsw-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
    }
    function showMayCalPopup(events, dateLabel) {
      var popup = document.getElementById('may-cal-popup');
      var content = document.getElementById('may-cal-popup-content');
      var html = '<div class="popup-day-header">' + dateLabel + '</div>';
      events.forEach(function(ev) {
        html += '<div class="popup-event-item" style="border-color:' + ev.color + '">';
        html += '<div class="pei-title"><span class="popup-event-color" style="background:' + ev.color + '"></span>' + ev.title + '</div>';
        if (ev.time) html += '<div class="pei-meta">&#9200; ' + ev.time + '</div>';
        if (ev.venue) html += '<div class="pei-meta">&#128205; ' + ev.venue + '</div>';
        if (ev.note) html += '<div class="pei-meta">' + ev.note + '</div>';
        html += '</div>';
      });
      content.innerHTML = html;
      popup.style.display = 'flex';
    }    var MAY_EV = {
      2:  [{color:'#6B7280', title:'Photoshoot', time:'All day', venue:'AMK Studio', note:'Check timing & costume requirements with teacher'}],
      3:  [{color:'#7C3AED', title:'Combine Class (Shi Han & Aneesha)', time:'15:30 â€“ 17:00', venue:'Venue TBC', note:'Special combine class'}],
      6:  [{color:'#6366F1', title:'Combine Ballet CBR', time:'14:45 â€“ 16:45', venue:'Clementi CBR', note:'2 hours'}],
      7:  [{color:'#EC4899', title:'Aneesha Solo Ballet', time:'14:30 â€“ 16:00', venue:'AMK Studio', note:'1h 30min'},
           {color:'#8B5CF6', title:'Shi Han Solo', time:'16:00 â€“ 18:00', venue:'AMK Studio', note:'2 hours'}],
      8:  [{color:'#EC4899', title:'Aneesha Solo Ballet', time:'15:00 â€“ 17:00', venue:'Clementi CBR', note:'2 hours'}],
      10: [{color:'#F97316', title:'SHOWCASE â€” Contemporary Group Competition', time:'4:00PM â€“ 8:15PM (Doors 3:30PM)', venue:'Kreta Ayer People\'s Theatre, 30A Kreta Ayer Rd', note:'Full costume & makeup from 12:45PM. Report 11:00AM AMK for 8U rehearsal.'}],
      13: [{color:'#6366F1', title:'Combine Ballet CBR', time:'14:45 â€“ 16:45', venue:'Clementi CBR', note:'2 hours'}],
      14: [{color:'#EC4899', title:'Aneesha Solo Ballet', time:'14:30 â€“ 16:00', venue:'AMK Studio', note:''},
           {color:'#8B5CF6', title:'Shi Han Solo', time:'16:00 â€“ 18:00', venue:'AMK Studio', note:''}],
      15: [{color:'#EC4899', title:'Aneesha Solo Ballet', time:'15:00 â€“ 17:00', venue:'Clementi CBR', note:''}],
      17: [{color:'#7C3AED', title:'Combine Class (Shi Han & Aneesha)', time:'15:30 â€“ 17:00', venue:'Venue TBC', note:''}],
      20: [{color:'#6366F1', title:'Combine Ballet CBR', time:'14:45 â€“ 16:45', venue:'Clementi CBR', note:'2 hours'}],
      21: [{color:'#EC4899', title:'Aneesha Solo Ballet', time:'14:30 â€“ 16:00', venue:'AMK Studio', note:''},
           {color:'#8B5CF6', title:'Shi Han Solo', time:'16:00 â€“ 18:00', venue:'AMK Studio', note:''}],
      22: [{color:'#7C3AED', title:'Combine Class (Shi Han & Aneesha)', time:'15:00 â€“ 17:00', venue:'Clementi CBR', note:''}],
      24: [{color:'#3B82F6', title:'Fly to Hong Kong â€” WBAC', time:'07:25 SQ874', venue:'Singapore T3 â†’ Hong Kong T1 (arr 11:20)', note:'Booking refs: FME478 / DRDYXE'}],
      25: [{color:'#EF4444', title:'WBAC Hong Kong Competition', time:'Competition Day', venue:'Hong Kong', note:'World Ballet Art Competition'}],
      26: [{color:'#3B82F6', title:'Return from Hong Kong', time:'12:35 SQ875', venue:'HKG T1 â†’ Singapore Changi (arr 16:30)', note:'Booking refs: FMHSS6 / DRDYXE'}],
      28: [{color:'#EF4444', title:'Evolution Dance Competition', time:'Day 1 of 9', venue:'Kreta Ayer People\'s Theatre, Singapore', note:'Runs 28 May â€“ 5 Jun 2026'}],
      29: [{color:'#EF4444', title:'Evolution Dance Competition', time:'Day 2 of 9', venue:'Kreta Ayer People\'s Theatre', note:''}],
      30: [{color:'#EF4444', title:'Evolution Dance Competition', time:'Day 3 of 9', venue:'Kreta Ayer People\'s Theatre', note:''}],
      31: [{color:'#EF4444', title:'Evolution Dance Competition', time:'Day 4 of 9', venue:'Kreta Ayer People\'s Theatre', note:'Competition continues into June'}]
    };
    var MAY_LBL = {
      2:'Sat 2 May', 3:'Sun 3 May', 6:'Wed 6 May', 7:'Thu 7 May',
      8:'Fri 8 May', 10:'Sun 10 May â€” SHOWCASE DAY', 13:'Wed 13 May',
      14:'Thu 14 May', 15:'Fri 15 May', 17:'Sun 17 May', 20:'Wed 20 May',
      21:'Thu 21 May', 22:'Fri 22 May', 24:'Sun 24 May â€” Travel',
      25:'Mon 25 May â€” Competition', 26:'Tue 26 May â€” Return',
      28:'Thu 28 May', 29:'Fri 29 May', 30:'Sat 30 May', 31:'Sun 31 May'
    };

    // ── June page JS ──
function toggleEv(el) { el.classList.toggle('open'); }
    function goTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    var _todayDate = new Date();
    if (_todayDate.getFullYear() === 2026 && _todayDate.getMonth() === 5) {
      const dayNum = _todayDate.getDate();
      document.querySelectorAll('#page-june .cal-day').forEach(el => {
        const num = el.querySelector('.cal-num');
        if (num && parseInt(num.textContent) === dayNum && !el.classList.contains('empty')) {
          el.classList.add('today');
        }
      });
    }
    function switchJunView(mode, btn) {
      document.getElementById('jun-view-list').style.display = 'none';
      document.getElementById('jun-view-calendar').style.display = 'none';
      document.getElementById('jun-view-gantt').style.display = 'none';
      document.getElementById('jun-view-' + mode).style.display = '';
      document.querySelectorAll('#page-june .vsw-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
    }
    function showJunCalPopup(events, dateLabel) {
      var popup = document.getElementById('jun-cal-popup');
      var content = document.getElementById('jun-cal-popup-content');
      var html = '<div class="popup-day-header">' + dateLabel + '</div>';
      events.forEach(function(ev) {
        html += '<div class="popup-event-item" style="border-color:' + ev.color + '">';
        html += '<div class="pei-title"><span class="popup-event-color" style="background:' + ev.color + '"></span>' + ev.title + '</div>';
        if (ev.time) html += '<div class="pei-meta">&#9200; ' + ev.time + '</div>';
        if (ev.venue) html += '<div class="pei-meta">&#128205; ' + ev.venue + '</div>';
        if (ev.note) html += '<div class="pei-meta">' + ev.note + '</div>';
        html += '</div>';
      });
      content.innerHTML = html;
      popup.style.display = 'flex';
    }    var JUN_EV = {
      1:  [{color:'#EF4444', title:'Evolution Dance Competition', time:'Day 5 of 9', venue:'Kreta Ayer People\'s Theatre', note:'Running 28 May â€“ 5 Jun 2026'}],
      2:  [{color:'#EF4444', title:'Evolution Dance Competition', time:'Day 6 of 9', venue:'Kreta Ayer People\'s Theatre', note:''}],
      3:  [{color:'#EF4444', title:'Evolution Dance Competition', time:'Day 7 of 9', venue:'Kreta Ayer People\'s Theatre', note:''},
           {color:'#EC4899', title:'Aneesha Solo Ballet', time:'13:00 â€“ 15:00', venue:'Clementi CBR', note:'2 hours'}],
      4:  [{color:'#EF4444', title:'Evolution Dance Competition', time:'Day 8 of 9', venue:'Kreta Ayer People\'s Theatre', note:''},
           {color:'#0EA5E9', title:'Combine Contemp â€” Shi Han & Aneesha', time:'14:00 â€“ 16:00', venue:'AMK Studio', note:'2 hours'}],
      5:  [{color:'#EF4444', title:'Evolution Dance Competition â€” Final Day', time:'Day 9 of 9', venue:'Kreta Ayer People\'s Theatre', note:'Competition ends today'}],
      6:  [{color:'#EC4899', title:'Aneesha Solo Ballet', time:'15:00 â€“ 16:30', venue:'Clementi CBR', note:'1h 30min'}],
      9:  [{color:'#3B82F6', title:'Head to Airport Tonight', time:'Evening', venue:'Changi T3', note:'SQ800 departs at 01:10 on 10 Jun. Be at T3 by midnight.'}],
      10: [{color:'#3B82F6', title:'Fly to Beijing â€” BDA Begins', time:'01:10 SQ800', venue:'Changi T3 â†’ Beijing T3 (arr 07:15)', note:'Booking ref: E2TELI. Hotel: Mercure Zhongguancun.'}],
      11: [{color:'#F59E0B', title:'BDA Beijing â€” Course Day 1', time:'10:00 depart hotel', venue:'Beijing Dance Academy', note:'Uniform: Black Leotard. Class observation + 3 lessons.'}],
      12: [{color:'#F59E0B', title:'BDA Beijing â€” Course Day 2', time:'10:00 depart hotel', venue:'Beijing Dance Academy', note:'Uniform: Complimentary Leotard. School tour + 3 lessons.'}],
      13: [{color:'#F59E0B', title:'BDA Beijing â€” Course Day 3', time:'10:00 depart hotel', venue:'Beijing Dance Academy', note:'Uniform: Black Leotard. 3 lessons.'}],
      14: [{color:'#F59E0B', title:'BDA Beijing â€” Day 4 + Certificate', time:'08:00 depart hotel', venue:'Beijing Dance Academy', note:'Uniform: Complimentary Leotard. Certificate presentation 16:00.'}],
      15: [{color:'#10B981', title:'City Tour Beijing â€” Day 1', time:'08:00 gather at hotel', venue:'Old Summer Palace + Temple of Heaven', note:'Lunch & dinner included'}],
      16: [{color:'#10B981', title:'City Tour Beijing â€” Day 2', time:'07:00 gather at hotel', venue:'Forbidden City + Photography Palace', note:'Banquet dinner included'}],
      17: [{color:'#3B82F6', title:'Return to Singapore', time:'16:35 SQ807', venue:'Beijing T3 â†’ Changi (arr 23:00)', note:'Booking ref: E2TELI'}],
      18: [{color:'#0EA5E9', title:'Combine Contemp â€” Shi Han & Aneesha', time:'14:00 â€“ 16:00', venue:'AMK Studio', note:'2 hours'}],
      19: [{color:'#6366F1', title:'Combine Ballet', time:'14:00 â€“ 17:00', venue:'Clementi CBR', note:'3 hours'}],
      20: [{color:'#EC4899', title:'Aneesha Solo Ballet', time:'15:00 â€“ 16:30', venue:'Clementi CBR', note:'1h 30min'}],
      22: [{color:'#6366F1', title:'Combine Ballet', time:'12:00 â€“ 15:00', venue:'Clementi CBR', note:'3 hours'},
           {color:'#0EA5E9', title:'Combine Contemp â€” Shi Han & Aneesha', time:'15:00 â€“ 17:00', venue:'Clementi CBR', note:'2 hours'}],
      24: [{color:'#EF4444', title:'MIBC Open Asia â€” Kuala Lumpur', time:'Competition Day 1', venue:'Petaling Jaya Performing Arts Centre, 1 Utama', note:'24â€“28 Jun 2026'}],
      25: [{color:'#EF4444', title:'MIBC Open Asia â€” Kuala Lumpur', time:'Competition Day 2', venue:'Petaling Jaya Performing Arts Centre', note:''}],
      26: [{color:'#EF4444', title:'MIBC Open Asia â€” Kuala Lumpur', time:'Competition Day 3', venue:'Petaling Jaya Performing Arts Centre', note:''}],
      27: [{color:'#EF4444', title:'MIBC Open Asia â€” Kuala Lumpur', time:'Competition Day 4', venue:'Petaling Jaya Performing Arts Centre', note:''}],
      28: [{color:'#EF4444', title:'MIBC Open Asia â€” Kuala Lumpur', time:'Competition Day 5', venue:'Petaling Jaya Performing Arts Centre', note:'Miami International Ballet Competition Open Asia'}]
    };
    var JUN_LBL = {
      1:'Mon 1 Jun', 2:'Tue 2 Jun', 3:'Wed 3 Jun', 4:'Thu 4 Jun',
      5:'Fri 5 Jun â€” Last Competition Day', 6:'Sat 6 Jun',
      9:'Tue 9 Jun â€” Airport Reminder', 10:'Wed 10 Jun â€” Fly to Beijing',
      11:'Thu 11 Jun â€” BDA Day 1', 12:'Fri 12 Jun â€” BDA Day 2',
      13:'Sat 13 Jun â€” BDA Day 3', 14:'Sun 14 Jun â€” BDA Day 4 + Certificate',
      15:'Mon 15 Jun â€” City Tour Day 1', 16:'Tue 16 Jun â€” City Tour Day 2',
      17:'Wed 17 Jun â€” Return to Singapore', 18:'Thu 18 Jun',
      19:'Fri 19 Jun', 20:'Sat 20 Jun', 22:'Mon 22 Jun',
      24:'Wed 24 Jun â€” MIBC Day 1', 25:'Thu 25 Jun â€” MIBC Day 2',
      26:'Fri 26 Jun â€” MIBC Day 3', 27:'Sat 27 Jun â€” MIBC Day 4',
      28:'Sun 28 Jun â€” MIBC Day 5'
    };

    // ── Home upcoming list JS ──
const upcoming = [
      { day: 2,  mon: 'MAY', title: 'Photoshoot at AMK', time: 'All day · AMK Studio', color: '#6B7280', link: 'may-2026.html#may-2' },
      { day: 3,  mon: 'MAY', title: 'Shi Han & Aneesha Combine Class ⭐', time: '15:30–17:00', color: '#7C3AED', link: 'may-2026.html#may-3' },
      { day: 6,  mon: 'MAY', title: 'Combine Ballet CBR', time: '14:45–16:45 · Clementi CBR', color: '#6366F1', link: 'may-2026.html#may-6' },
      { day: 7,  mon: 'MAY', title: 'Aneesha Solo Ballet', time: '14:30–16:00 · AMK Studio', color: '#EC4899', link: 'may-2026.html#may-7' },
      { day: 8,  mon: 'MAY', title: 'Aneesha Solo Ballet', time: '15:00–17:00 · Clementi CBR', color: '#EC4899', link: 'may-2026.html#may-8' },
      { day: 10, mon: 'MAY', title: '🎭 Contemporary Group Showcase', time: '4:00PM–8:15PM · Kreta Ayer', color: '#F97316', link: 'may-2026.html#may-10' },
      { day: 24, mon: 'MAY', title: '✈️ WBAC: Fly to Hong Kong (SQ874)', time: 'Departs 07:25', color: '#3B82F6', link: 'may-2026.html#may-24' },
      { day: 25, mon: 'MAY', title: '🏆 WBAC Hong Kong Competition', time: 'All day · Hong Kong', color: '#EF4444', link: 'may-2026.html#may-25' },
    ];

    today = new Date();
    const todayVal= today.getFullYear() * 10000 + (today.getMonth()+1) * 100 + today.getDate();

    const monthNum = { 'MAY': 5, 'JUN': 6 };
    const sorted = upcoming
      .map(e => {
        const mn = monthNum[e.mon] || 5;
        return { ...e, val: 2026 * 10000 + mn * 100 + e.day };
      })
      .filter(e => e.val >= todayVal)
      .slice(0, 3);

    const display = sorted.length ? sorted : upcoming.slice(0, 3);

    const ul = document.getElementById('upcomingList');
    display.forEach(e => {
      const pageMap = { 'may-2026.html': 'may', 'june-2026.html': 'june', 'events.html': 'events', 'bda-beijing.html': 'bda' };
      const parts = e.link.split('#');
      const pg = pageMap[parts[0]] || 'home';
      const anch = parts[1] || '';
      ul.innerHTML += `
        <div onclick="showPage('${pg}'${anch ? ",'" + anch + "'" : ''})" style="text-decoration:none;display:block;cursor:pointer;">
          <div class="up-item" style="border-color:${e.color}">
            <div class="up-date">
              <div class="up-day" style="color:${e.color}">${e.day}</div>
              <div class="up-mon">${e.mon}</div>
            </div>
            <div class="up-info">
              <div class="up-title">${e.title}</div>
              <div class="up-time">${e.time}</div>
            </div>
          </div>
        </div>`;
    });
