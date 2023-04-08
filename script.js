document.getElementById('generate-prompt-btn').addEventListener('click', function () {
    const subject = document.getElementById('subject').value;
    const genre = document.getElementById('genre').value;
    const location = document.getElementById('location').value;
    const weather = document.getElementById('weather').value;
    const cameraAngle = document.getElementById('camera-angle').value;
    const shotOn = document.getElementById('shot-on').value;
    const lighting = document.getElementById('lighting').value;
    const timeOfDay = document.getElementById('time-of-day').value;
    const filmlook = document.getElementById('filmlook').value;
    const photographerStyle = document.getElementById('photographer-style').value;
    const filmmakerStyle = document.getElementById('filmmaker-style').value;
    const aspectRatio = document.getElementById('aspect-ratio').value;
    const quality = document.getElementById('quality').value;
    const customStart = document.getElementById('beginning-text').value;
    const customEnd = document.getElementById('custom-input-end').value;

    const promptResult = [
        customStart, subject, genre, location, weather, cameraAngle, shotOn, lighting,
        timeOfDay, filmlook, photographerStyle, filmmakerStyle, `--ar ${aspectRatio}`,
        `--q ${quality}`, customEnd
    ].filter(e => e).join(', ');

    document.getElementById('prompt-output').value = promptResult;
});


    document.getElementById('copy-prompt').addEventListener('click', function () {
        const promptResult = document.getElementById('prompt-output');
        promptResult.select();
        document.execCommand('copy');
    });
});
