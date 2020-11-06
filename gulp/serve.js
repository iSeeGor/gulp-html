module.exports = function(){
    $.gulp.task('browser-sync', () => {

        $.browserSync.init({
            server: {
                baseDir: './' 
            },

            // proxy: 'http://',
            // notify: false,
            // online: true
        });
     
    });
}
