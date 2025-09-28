export class Tag {

  static readonly UNITY = new Tag('Unity', '#111111');
  static readonly GODOT = new Tag('Godot', 'darkblue');
  static readonly SOLO = new Tag('Solo', 'darkgreen');
  static readonly TEAM = new Tag('Team', 'darkorange');
  static readonly VB = new Tag('Visual Basic', '#2b2bd2');

  private constructor(private readonly key: string, public readonly color: string) {}

  toString() {
    return this.key;
  }
}
