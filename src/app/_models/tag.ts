export class Tag {

  static readonly UNITY = new Tag('Unity', 'grey');
  static readonly CSHARP = new Tag('C#', '#301934');
  static readonly GODOT = new Tag('Godot', 'darkblue');

  private constructor(private readonly key: string, public readonly color: string) {}

  toString() {
    return this.key;
  }
}
