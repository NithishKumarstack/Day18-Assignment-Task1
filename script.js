// Fetch to retrivie data from api and display Thirukkural
fetch('https://api-thirukkural.vercel.app/api?num=1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        //storing the data in a variable to use
        const kuralNumber = data.number;
        const ChapterEng = data.chap_eng;
        const ChapterTam = data.chap_tam;
        const ChapterGroupEng = data.chapgrp_eng;
        const ChapterGroupTam = data.chapgrp_tam;
        const Eng = data.eng;
        const EngExplain = data.eng_exp;
        const Line1 = data.line1;
        const Line2 = data.line2;
        const SectionEnglish = data.sect_eng;
        const SectionTamil = data.sect_tam;
        const TamExplain = data.tam_exp;


        const kuralElement = document.createElement('div');
        kuralElement.innerHTML = `<p><strong>Kural Number:</strong> ${kuralNumber}</p>
                                  <p><strong>Section Tamil:</strong> ${SectionTamil}</p>
                                  <p><strong>Chapter Group Tamil:</strong> ${ChapterGroupTam}</p>
                                  <p><strong>Chapter Tamil:</strong> ${ChapterTam}</p>
                                  <p><strong>Line1:</strong> ${Line1}</p>
                                  <p><strong>Line2:</strong> ${Line2}</p>
                                  <p><strong>Tamil Explain:</strong> ${TamExplain}</p>
                                  <p><strong>Section English:</strong> ${SectionEnglish}</p>
                                  <p><strong>Chapter Group English:</strong> ${ChapterGroupEng}</p>
                                  <p><strong>Chapter English:</strong> ${ChapterEng}</p>
                                  <p><strong>English:</strong> ${Eng}</p>
                                  <p><strong>English Explain:</strong> ${EngExplain}</p>`;

        const kuralSection = document.getElementById('kural-content');
        kuralSection.appendChild(kuralElement);
    })
    .catch(error => {
        console.error('Error:', error);
    });
