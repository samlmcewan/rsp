var lightbox = GLightbox();
            lightbox.on('open', (target) => {
                console.log('lightbox opened');
            });
            var lightboxDescription = GLightbox({
                selector: '.glightbox2'
            });
            var lightboxVideo = GLightbox({
                selector: '.glightbox3'
            });
            lightboxVideo.on('slide_changed', ({ prev, current }) => {
                console.log('Prev slide', prev);
                console.log('Current slide', current);

                const { slideIndex, slideNode, slideConfig, player } = current;

                if (player) {
                    if (!player.ready) {
                        // If player is not ready
                        player.on('ready', (event) => {
                            // Do something when video is ready
                        });
                    }

                    player.on('play', (event) => {
                        console.log('Started play');
                    });

                    player.on('volumechange', (event) => {
                        console.log('Volume change');
                    });

                    player.on('ended', (event) => {
                        console.log('Video ended');
                    });
                }
            });

            var lightboxInlineIframe = GLightbox({
                selector: '.glightbox4'
            });

            /* var exampleApi = GLightbox({ selector: null });
            exampleApi.insertSlide({
                href: 'https://picsum.photos/1200/800',
            });
            exampleApi.insertSlide({
                width: '500px',
                content: '<p>Example</p>'
            });
            exampleApi.insertSlide({
                href: 'https://www.youtube.com/watch?v=WzqrwPhXmew',
            });
            exampleApi.insertSlide({
                width: '200vw',
                content: document.getElementById('inline-example')
            });
            exampleApi.open(); */