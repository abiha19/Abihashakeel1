function makeAlbum(artistName, albumTitle, numberOfTracks) {
    var album = {
        artist: artistName,
        title: albumTitle,
    };
    if (numberOfTracks !== undefined) {
        album['tracks'] = numberOfTracks;
    }
    return album;
}
var album1 = makeAlbum('Taimour baig', 'long time no see');
var album2 = makeAlbum('Anuv jain', 'husn');
var album3 = makeAlbum('young stunners', 'open letter', 16);
console.log(album1);
console.log(album2);
console.log(album3);
