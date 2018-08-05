import { MusicSearchModule } from './music-search.module';

describe('MusicSearchModule', () => {
  let musicSearchModule: MusicSearchModule;

  beforeEach(() => {
    musicSearchModule = new MusicSearchModule();
  });

  it('should create an instance', () => {
    expect(musicSearchModule).toBeTruthy();
  });
});
